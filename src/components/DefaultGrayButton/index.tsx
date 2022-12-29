import * as S from "./styles";
import { Text } from "react-native";
import { Plus } from "phosphor-react-native";
import { TextButton } from "./styles";
import theme from "../../theme";

interface DefaultGrayButtonProps {
  text: string;
  moveTo: () => void;
}

export function DefaultGrayButton({ text, moveTo }: DefaultGrayButtonProps) {
  return (
    <S.Container onPress={moveTo}>
      <Plus color={theme.colors.white} size={28} />
      <TextButton>{text}</TextButton>
    </S.Container>
  );
}
