import { Plus } from "phosphor-react-native";

import theme from "../../theme";
import * as S from "./styles";
import { TextButton } from "./styles";

interface DefaultGrayButtonProps {
  text: string;
  moveTo: () => void;
  routeName?: string;
  disabled: boolean;
}

export function DefaultGrayButton({
  text,
  moveTo,
  routeName,
  disabled,
}: DefaultGrayButtonProps) {
  return (
    <S.Container
      disabled={disabled}
      onPress={moveTo}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
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
