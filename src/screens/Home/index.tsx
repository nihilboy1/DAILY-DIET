import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { useCallback, useEffect, useState } from "react";

import { DefaultGrayButton } from "../../components/DefaultGrayButton";
import { MealHistory } from "../../components/MealHistory";
import { MealsPercentage } from "../../components/MealsPercentage";
import { ProfileBox } from "../../components/ProfileBox";
import { readMeals } from "../../storage/CRUD/readMeals";
import theme from "../../theme";
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
      const data = await readMeals();
      setMeals(data);
      setGroupedMeals(groupMealsByDate(data));
    } catch (error) {
      console.log(error);
    }
  }

  const groupMealsByDate = (meals: mealProps[]) => {
    // Classifique as refeições por data antes de agrupá-las
    meals.sort((a: mealProps, b: mealProps) => {
      // Separe a data em dia, mês e ano
      const [dayA, monthA, yearA] = a.date.split("/");
      const [dayB, monthB, yearB] = b.date.split("/");

      // Converta os anos em números inteiros e compare
      const yearANum = parseInt(yearA, 10);
      const yearBNum = parseInt(yearB, 10);
      if (yearANum !== yearBNum) return yearBNum - yearANum;

      // Converta os meses em números inteiros e compare
      const monthANum = parseInt(monthA, 10);
      const monthBNum = parseInt(monthB, 10);
      if (monthANum !== monthBNum) return monthBNum - monthANum;

      // Converta os dias em números inteiros e compare
      const dayANum = parseInt(dayA, 10);
      const dayBNum = parseInt(dayB, 10);
      return dayBNum - dayANum;
    });

    const uniqueDates = [...new Set(meals.map((meal: mealProps) => meal.date))];
    const groupedMeals: sectionListDataProps[] = uniqueDates.map((date) => ({
      title: date,
      data: meals.filter((meal: mealProps) => meal.date === date),
    }));
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
          onPress={MoveToNewMeal}
          icon={
            <Plus
              color={theme.colors.white}
              size={28}
              style={{ marginRight: 10 }}
            />
          }
        />
      </S.ButtonContainer>
      <MealHistory groupedMeals={groupedMeals}></MealHistory>
    </S.Container>
  );
}
