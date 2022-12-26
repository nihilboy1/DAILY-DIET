import * as S from "./styles";
import { Text } from "react-native";
import { Plus } from "phosphor-react-native";
import { TextButton } from "./styles";
import theme from "../../theme";

interface DefaultGrayButtonProps {
  text: string;
}

export function DefaultGrayButton({ text }: DefaultGrayButtonProps) {
  return (
    <S.Container>
      <Plus color={theme.colors.white} size={28} />
      <TextButton>{text}</TextButton>
    </S.Container>
  );
}
