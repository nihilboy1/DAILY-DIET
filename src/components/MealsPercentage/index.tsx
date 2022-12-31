import * as S from "./styles";
import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import theme from "../../theme";
interface MealsPercentageProps {
  moveTo: () => void;
  routeName: string;
}

export function MealsPercentage({ moveTo, routeName }: MealsPercentageProps) {
  return (
    <S.Container>
      <S.ArrowButton onPress={moveTo} routeName={routeName}>
        {routeName === "home" ? (
          <ArrowUpRight color={theme.colors.green_dark} weight="bold" />
        ) : (
          <ArrowLeft color={theme.colors.green_dark} weight="bold" />
        )}
      </S.ArrowButton>
      <S.Percentage>90,86%</S.Percentage>
      <S.SpanText>das refeições dentro da dieta</S.SpanText>
    </S.Container>
  );
}
