import { Circle } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";
import * as S from "./styles";
import { mealProps } from "../../screens/Home";

interface Props {
  data: mealProps;
}

export function MealBar({ data }: Props) {
  const navigation = useNavigation();

  function goToMealInfo() {
    navigation.navigate("mealInfos", { data });
  }

  return (
    <S.Container onPress={goToMealInfo}>
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
