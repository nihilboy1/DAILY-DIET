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
    <S.Container
      style={{
        backgroundColor:
          value >= 50 ? theme.colors.green_light : theme.colors.red_light,
      }}
    >
      <S.ArrowButton onPress={moveTo} routeName={routeName}>
        {routeName === "home" ? (
          <ArrowUpRight
            color={
              value >= 50 ? theme.colors.green_dark : theme.colors.red_dark
            }
            weight="bold"
          />
        ) : (
          <ArrowLeft
            color={
              value >= 50 ? theme.colors.green_dark : theme.colors.red_dark
            }
            weight="bold"
          />
        )}
      </S.ArrowButton>
      <S.Percentage>{value.toFixed(0)}%</S.Percentage>
      <S.SpanText>das refeições dentro da dieta</S.SpanText>
    </S.Container>
  );
}
