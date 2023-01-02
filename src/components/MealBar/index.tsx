import { Circle } from "phosphor-react-native";

import theme from "../../theme";
import * as S from "./styles";

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
          data.insideTheDiet ? theme.colors.green_mid : theme.colors.red_mid
        }
      />
    </S.Container>
  );
}
