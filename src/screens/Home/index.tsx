import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Text } from "react-native";

import { DefaultGrayButton } from "../../components/DefaultGrayButton";
import { MealHistory } from "../../components/MealHistory";
import { MealsPercentage } from "../../components/MealsPercentage";
import { ProfileBox } from "../../components/ProfileBox";
import { getAllMeals } from "../../storage/mealRegister/getAllMeals";
import * as S from "./styles";

export interface mealProps {
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
  const [groupedMeals, setGroupedMeals] = useState<sectionListDataProps[]>([]);
  const navigation = useNavigation();
  const route = useRoute();

  async function fetchMeals() {
    try {
      const data = await getAllMeals();
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  }

  function MoveToStatistics() {
    navigation.navigate("statistics");
  }

  function MoveToNewMeal() {
    navigation.navigate("newMeal");
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <S.Container>
      <ProfileBox />
      <MealsPercentage moveTo={MoveToStatistics} routeName={route.name} />
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
      <Text>{JSON.stringify(meals)}</Text>
    </S.Container>
  );
}
