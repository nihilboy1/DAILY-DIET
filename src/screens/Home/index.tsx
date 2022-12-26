import { Text } from "react-native";
import * as S from "./styles";
import { ProfileBox } from "../../components/ProfileBox";
import { MealsPercentage } from "../../components/MealsPercentage";
import { AddNewMeal } from "../../components/AddNewMeal";

export function Home() {
  return (
    <S.Container>
      <ProfileBox />
      <MealsPercentage />
      <AddNewMeal />
    </S.Container>
  );
}
