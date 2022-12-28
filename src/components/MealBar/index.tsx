import { Circle } from "phosphor-react-native";
import * as S from "./styles";
import theme from "../../theme";

export function MealBar({ data }: any) {
  return (
    <S.Container>
      <S.TextBox>
        <S.TimeStampBox>{data.hour}</S.TimeStampBox>
        <S.MealName>{data.mealName}</S.MealName>
      </S.TextBox>
      <Circle
        weight="fill"
        color={
          data.insideTheDiet ? theme.colors.green_light : theme.colors.red_light
        }
      />
    </S.Container>
  );
}
