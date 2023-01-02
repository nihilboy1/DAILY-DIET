import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft, Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { mealProps } from "../Home";

import theme from "../../theme";
import * as S from "./styles";
import { useEffect } from "react";

interface RouteParams {
  data: mealProps;
}

export function MealInfos() {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params as RouteParams;
  function MoveToHome() {
    navigation.navigate("home");
  }

  useEffect(() => {});
  return (
    <S.Container insideTheDiet={data.insideTheDiet}>
      <S.Header>
        <TouchableOpacity
          onPress={MoveToHome}
          style={{
            position: "absolute",
            left: 28,
            top: 25,
            padding: 10,
          }}
        >
          <ArrowLeft color={theme.colors.gray_500} weight="bold" />
        </TouchableOpacity>
        <S.HeaderText>Refeição</S.HeaderText>
      </S.Header>
      <S.InputsBox>
        <S.TitleText>{data.mealName}</S.TitleText>
        <S.NormalText>{data.description}</S.NormalText>
        <S.TitleText>Data e hora:</S.TitleText>
        <S.NormalText>
          {data.date} às {data.hour}
        </S.NormalText>
        <S.InsideDietLabel>
          <Circle
            weight="fill"
            size={12}
            color={
              data.insideTheDiet
                ? theme.colors.green_dark
                : theme.colors.red_dark
            }
          />
          <S.InsideTheDietLabelText>
            {data.insideTheDiet ? "Dentro da dieta" : "Fora da dieta"}
          </S.InsideTheDietLabelText>
        </S.InsideDietLabel>
      </S.InputsBox>
    </S.Container>
  );
}
