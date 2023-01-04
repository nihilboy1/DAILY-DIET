import { Image } from "react-native";
import FinishImageTrue from "../../../assets/finish-image-true.png";
import FinishImageFalse from "../../../assets/finish-image-false.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DefaultGrayButton } from "../../components/DefaultGrayButton";
import * as S from "./styles";
import theme from "../../theme";

interface RouteParams {
  insideTheDiet: boolean;
}

export function FinishScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { insideTheDiet } = route.params as RouteParams;

  function moveToHome() {
    navigation.navigate("home");
  }
  return (
    <S.Container>
      {insideTheDiet ? (
        <S.TitleText style={{ color: theme.colors.green_dark }}>
          Continue assim!
        </S.TitleText>
      ) : (
        <S.TitleText style={{ color: theme.colors.red_dark }}>
          Que pena...
        </S.TitleText>
      )}
      <S.DescriptionText>
        {insideTheDiet
          ? "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
      </S.DescriptionText>
      <Image source={insideTheDiet ? FinishImageTrue : FinishImageFalse} />
      <S.ButtonContainer>
        <DefaultGrayButton
          text="Ir para a página inicial"
          onPress={moveToHome}
          disabled={false}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}
