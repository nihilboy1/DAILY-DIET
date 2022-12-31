import { useNavigation, useRoute } from "@react-navigation/native";

import { MealsPercentage } from "../../components/MealsPercentage";
import { StatisticBox } from "../../components/StatisticBox";
import theme from "../../theme";
import * as S from "./styles";

export function Statistics() {
  const navigation = useNavigation();
  const route = useRoute();

  function MoveToHome() {
    navigation.navigate("home");
  }
  return (
    <S.Container>
      <MealsPercentage moveTo={MoveToHome} routeName={route.name} />
      <S.StatusBox>
        <S.Title>Estatísticas Gerais</S.Title>
        <StatisticBox
          w={"100%"}
          desc="Melhor sequência de pratos dentro da dieta"
        />
        <StatisticBox w={"100%"} desc="Refeições registradas" />
        <S.InOrOutBox>
          <StatisticBox
            bgc={theme.colors.green_light}
            w={"48%"}
            desc="Refeições dentro da dieta"
          />
          <StatisticBox
            bgc={theme.colors.red_light}
            w={"48%"}
            desc="Refeições fora da dieta"
          />
        </S.InOrOutBox>
      </S.StatusBox>
    </S.Container>
  );
}
