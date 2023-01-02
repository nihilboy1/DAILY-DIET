import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";

import theme from "../../theme";
import * as S from "./styles";

interface MealsPercentageProps {
  moveTo: () => void;
  routeName: string;
  value: number;
}

export function MealsPercentage({
  moveTo,
  routeName,
  value,
}: MealsPercentageProps) {
  return (
    <S.Container>
      <S.ArrowButton onPress={moveTo} routeName={routeName}>
        {routeName === "home" ? (
          <ArrowUpRight color={theme.colors.green_dark} weight="bold" />
        ) : (
          <ArrowLeft color={theme.colors.green_dark} weight="bold" />
        )}
      </S.ArrowButton>
      <S.Percentage>{value}%</S.Percentage>
      <S.SpanText>das refeições dentro da dieta</S.SpanText>
    </S.Container>
  );
}
