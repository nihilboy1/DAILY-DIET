import * as S from "./styles";
import { TextButton } from "./styles";

interface Props {
  text: string;
  onPress: () => void;
  disabled: boolean;
  icon?: React.ReactElement;
  negativeColors?: boolean;
}

export function DefaultGrayButton({
  text,
  onPress,
  disabled,
  icon,
  negativeColors = false,
}: Props) {
  return (
    <S.Container
      disabled={disabled}
      negativeColors={negativeColors}
      onPress={onPress}
    >
      {icon && icon}
      <TextButton disabled={disabled} negativeColors={negativeColors}>
        {text}
      </TextButton>
    </S.Container>
  );
}
