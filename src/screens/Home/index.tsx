import * as S from "./styles";
import { ProfileBox } from "../../components/ProfileBox";
import { MealsPercentage } from "../../components/MealsPercentage";
import { MealHistory } from "../../components/MealHistory";
import { useState, useEffect } from "react";
import { mealsDATA } from "../../data";
import groupBy from "lodash.groupby";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DefaultGrayButton } from "../../components/DefaultGrayButton";

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
  const [meals, setMeals] = useState<mealProps[]>(mealsDATA);
  const [groupedMeals, setGroupedMeals] = useState<sectionListDataProps[]>([]);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const groupedMeals = Object.values(
      groupBy(meals, function (i) {
        return i.date;
      })
    );

    const sectionListData = [] as sectionListDataProps[];
    groupedMeals.map((day) => {
      let section = {
        title: day[0].date,
        data: [...day],
      };
      sectionListData.push(section);
    });
    setGroupedMeals(sectionListData);
  }, []);

  function MoveToStatistics() {
    navigation.navigate("statistics");
  }

  function MoveToNewMeal() {
    navigation.navigate("newMeal");
  }

  return (
    <S.Container>
      <ProfileBox />
      <MealsPercentage moveTo={MoveToStatistics} routeName={route.name} />
      <S.ButtonContainer>
        <S.LabelText>Refeições</S.LabelText>
        <DefaultGrayButton text="Nova Refeição" moveTo={MoveToNewMeal} />
      </S.ButtonContainer>
      <MealHistory groupedMeals={groupedMeals} />
    </S.Container>
  );
}
