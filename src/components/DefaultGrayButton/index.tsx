import { Plus } from "phosphor-react-native";

import theme from "../../theme";
import * as S from "./styles";
import { TextButton } from "./styles";

interface DefaultGrayButtonProps {
  text: string;
  moveTo: () => void;
  routeName?: string;
}

export function DefaultGrayButton({
  text,
  moveTo,
  routeName,
}: DefaultGrayButtonProps) {
  return (
    <S.Container onPress={moveTo}>
      {routeName == "home" && (
        <Plus
          color={theme.colors.white}
          size={28}
          style={{ marginRight: 10 }}
        />
      )}
      <TextButton>{text}</TextButton>
    </S.Container>
  );
}
