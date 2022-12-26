import { View, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { ArrowUpRight } from "phosphor-react-native";
import theme from "../../theme";

export function MealsPercentage() {
  return (
    <S.Container>
      <S.ArrowUpRightButton>
        <ArrowUpRight color={theme.colors.green_dark} weight="bold" />
      </S.ArrowUpRightButton>
      <S.Percentage>90,86%</S.Percentage>
      <S.SpanText>das refeições dentro da dieta</S.SpanText>
    </S.Container>
  );
}
