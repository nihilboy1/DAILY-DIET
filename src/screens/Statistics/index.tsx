import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { MealsPercentage } from "../../components/MealsPercentage";
import { StatisticBox } from "../../components/StatisticBox";
import { getAllMeals } from "../../storage/mealRegister/getAllMeals";
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

export function Statistics() {
  const [meals, setMeals] = useState<mealProps[]>();
  const [bestInsideOfTheDietMealsStreak, setBestInsideOfTheDietMealsStreak] =
    useState<number>(0);
  const [totalMeals, setTotalMeals] = useState<number>(0);
  const [totalOutOfDietMeals, setTotalOutOfDietMeals] = useState<number>(0);
  const [totalInsideOfDietMeals, setTotalInsideOfDietMeals] =
    useState<number>(0);
  const navigation = useNavigation();
  const route = useRoute();

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

  async function fetchAllMeals() {
    try {
      const data = await getAllMeals();
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  }
  function MoveToHome() {
    navigation.navigate("home");
  }

  useEffect(() => {
    fetchAllMeals();
  }, []);

  useEffect(() => {
    if (meals) {
      const { bestStreak, total, totalOutOfDiet, totalInsideOfDiet } =
        getStatistics(meals);
      setBestInsideOfTheDietMealsStreak(bestStreak);
      setTotalMeals(total);
      setTotalOutOfDietMeals(totalOutOfDiet);
      setTotalInsideOfDietMeals(totalInsideOfDiet);
    }
  }, [meals]);
  return (
    <S.Container>
      <MealsPercentage
        moveTo={MoveToHome}
        routeName={route.name}
        value={(totalInsideOfDietMeals / totalMeals) * 100}
      />
      <S.StatusBox>
        <S.Title>Estatísticas Gerais</S.Title>
        <StatisticBox
          value={bestInsideOfTheDietMealsStreak}
          w={"100%"}
          desc="Melhor sequência de pratos dentro da dieta"
        />
        <StatisticBox
          w={"100%"}
          desc="Refeições registradas"
          value={totalMeals}
        />
        <S.InOrOutBox>
          <StatisticBox
            bgc={theme.colors.green_light}
            w={"48%"}
            desc="Refeições dentro da dieta"
            value={totalMeals - totalOutOfDietMeals}
          />
          <StatisticBox
            bgc={theme.colors.red_light}
            w={"48%"}
            desc="Refeições fora da dieta"
            value={totalOutOfDietMeals}
          />
        </S.InOrOutBox>
      </S.StatusBox>
    </S.Container>
  );
}
