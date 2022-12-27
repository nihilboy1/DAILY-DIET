import { SectionList, Text } from "react-native";
import * as S from "./styles";
import { ProfileBox } from "../../components/ProfileBox";
import { MealsPercentage } from "../../components/MealsPercentage";
import { AddNewMeal } from "../../components/AddNewMeal";
import { MealBar } from "../../components/MealBar";
import { MealHistory } from "../../components/MealHistory";
import { useState, useEffect } from "react";
import { mealsDATA } from "../../data";
import groupBy from "lodash.groupby";

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
  const [groupedMeals, setGroupedMeals] = useState<sectionListDataProps[]>();

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

  return (
    <S.Container>
      <ProfileBox />
      <MealsPercentage />
      <AddNewMeal />
      <MealHistory groupedMeals={groupedMeals} />
    </S.Container>
  );
}
