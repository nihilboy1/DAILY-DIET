import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeft,
  Circle,
  PencilSimpleLine,
  Trash,
} from "phosphor-react-native";
import { TouchableOpacity, View } from "react-native";

import { DefaultGrayButton } from "../../components/DefaultGrayButton";
import { deleteMeal } from "../../storage/CRUD/deteleMeal";
import theme from "../../theme";
import { mealProps } from "../Home";
import * as S from "./styles";

interface RouteParams {
  data: mealProps;
}

export function MealInfos() {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params as RouteParams;

  function moveToHome() {
    navigation.navigate("home");
  }

  function deleteAndMoveToHome() {
    handleDeleteMeal();
    navigation.navigate("home");
  }

  async function handleDeleteMeal() {
    await deleteMeal(data.id);
  }

  return (
    <S.Container insideTheDiet={data.insideTheDiet}>
      <S.Header>
        <TouchableOpacity
          onPress={moveToHome}
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
        <View>
          <S.TitleText>{data.mealName}</S.TitleText>
          <S.NormalText>{data.description}</S.NormalText>
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
        </View>
        <S.ButtonsBox>
          <DefaultGrayButton
            onPress={moveToHome}
            disabled={false}
            text="Editar refeição"
            icon={
              <PencilSimpleLine
                color={theme.colors.white}
                style={{ marginRight: 10 }}
              />
            }
          />
          <DefaultGrayButton
            onPress={deleteAndMoveToHome}
            disabled={false}
            text="Excluir refeição"
            negativeColors
            icon={
              <Trash
                style={{ marginRight: 10 }}
                color={theme.colors.gray_600}
              />
            }
          />
        </S.ButtonsBox>
      </S.InputsBox>
    </S.Container>
  );
}
