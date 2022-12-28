import { View, Text, TouchableOpacity } from "react-native";

import * as S from "./styles";
import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";

interface MealsPercentageProps {
  moveTo: () => void;
  routeName: string;
}

export function MealsPercentage({ moveTo, routeName }: MealsPercentageProps) {
  return (
    <S.Container>
      <S.ArrowUpRightButton onPress={moveTo} routeName={routeName}>
        {routeName === "home" ? (
          <ArrowUpRight color={theme.colors.green_dark} weight="bold" />
        ) : (
          <ArrowLeft color={theme.colors.green_dark} weight="bold" />
        )}
      </S.ArrowUpRightButton>
      <S.Percentage>90,86%</S.Percentage>
      <S.SpanText>das refeições dentro da dieta</S.SpanText>
    </S.Container>
  );
}
