import * as S from "./styles";
import { TextButton } from "./styles";

interface DefaultGrayButtonProps {
  text: string;
  onPress: () => void;
  disabled: boolean;
  icon?: JSX.Element;
  negativeColors?: boolean;
}

export function DefaultGrayButton({
  text,
  onPress,
  disabled,
  icon,
  negativeColors = false,
}: DefaultGrayButtonProps) {
  return (
    <S.Container
      negativeColors={negativeColors}
      disabled={disabled}
      onPress={onPress}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      {icon && icon}
      <TextButton negativeColors={negativeColors}>{text}</TextButton>
    </S.Container>
  );
}
