import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";

import { DefaultGrayButton } from "../../components/DefaultGrayButton";
import { MealHistory } from "../../components/MealHistory";
import { MealsPercentage } from "../../components/MealsPercentage";
import { ProfileBox } from "../../components/ProfileBox";
import { getAllMeals } from "../../storage/mealRegister/getAllMeals";
import * as S from "./styles";

export interface mealProps {
  id: string;
  mealName: string;
  description: string;
  date: string;
  hour: string;
  insideTheDiet: boolean;
}

export interface sectionListDataProps {
  title: string;
  data: mealProps[];
}

export function Home() {
  const [meals, setMeals] = useState<mealProps[]>([]);
  const [totalMeals, setTotalMeals] = useState<number>(0);
  const [totalInsideOfDietMeals, setTotalInsideOfDietMeals] =
    useState<number>(0);

  const [groupedMeals, setGroupedMeals] = useState<sectionListDataProps[]>([]);
  const navigation = useNavigation();
  const route = useRoute();

  async function fetchAllMeals() {
    try {
      const data = await getAllMeals();
      setMeals(data);
      setGroupedMeals(groupMealsByDate(data));
      console.log("fetchMeals chamado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  const groupMealsByDate = (meals: mealProps[]) => {
    const uniqueDates = [...new Set(meals.map((meal) => meal.date))];
    const groupedMeals = uniqueDates.map((date) => ({
      title: date,
      data: meals.filter((meal) => meal.date === date),
    }));
    console.log("All meals successfully grouped by date");
    return groupedMeals;
  };

  function getStatistics(meals: mealProps[]) {
    let currentStreak = 0;
    let bestStreak = 0;
    let totalOutOfDiet = 0;
    let totalInsideOfDiet = 0;

    meals.forEach((meal) => {
      if (meal.insideTheDiet) {
        currentStreak++;
        totalInsideOfDiet++;
        if (currentStreak > bestStreak) {
          bestStreak = currentStreak;
        }
      } else {
        currentStreak = 0;
        totalOutOfDiet++;
      }
    });

    return {
      bestStreak: bestStreak,
      totalOutOfDiet: totalOutOfDiet,
      totalInsideOfDiet: totalInsideOfDiet,
      total: meals.length,
    };
  }

  function MoveToStatistics() {
    navigation.navigate("statistics");
  }

  function MoveToNewMeal() {
    navigation.navigate("newMeal");
  }

  useFocusEffect(
    useCallback(() => {
      console.log("o fetch da home foi chamado");
      fetchAllMeals();
    }, [])
  );

  useEffect(() => {
    const { total, totalInsideOfDiet } = getStatistics(meals);
    setTotalMeals(total);
    setTotalInsideOfDietMeals(totalInsideOfDiet);
  }, [meals]);

  return (
    <S.Container>
      <ProfileBox />
      <MealsPercentage
        moveTo={MoveToStatistics}
        value={(totalInsideOfDietMeals / totalMeals) * 100}
        routeName={route.name}
      />
      <S.ButtonContainer>
        <S.LabelText>Refeições</S.LabelText>
        <DefaultGrayButton
          disabled={false}
          text="Nova Refeição"
          moveTo={MoveToNewMeal}
          routeName={route.name}
        />
      </S.ButtonContainer>
      <MealHistory groupedMeals={groupedMeals}></MealHistory>
    </S.Container>
  );
}
