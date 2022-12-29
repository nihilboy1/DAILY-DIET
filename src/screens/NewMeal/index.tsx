import { TextInput, View, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";

export function NewMeal() {
  const navigation = useNavigation();

  function MoveToHome() {
    navigation.navigate("home");
  }
  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity
          onPress={MoveToHome}
          style={{ position: "absolute", left: 10, top: 25 }}
        >
          <ArrowLeft color={theme.colors.gray_500} weight="bold" />
        </TouchableOpacity>
        <S.HeaderText>Nova Refeição</S.HeaderText>
      </S.Header>
      <S.InputsBox>
        <S.InputContainer>
          <S.InputTitle></S.InputTitle>
          <S.TextInput />
        </S.InputContainer>
      </S.InputsBox>
    </S.Container>
  );
}
