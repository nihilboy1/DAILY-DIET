import * as S from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  label: string;
  height?: number;
  maxLength?: number;
  width?: string;
};

export function Input({
  label,
  height = 50,
  maxLength = 40,
  width = "100%",
  ...rest
}: Props) {
  return (
    <S.InputContainer style={{ width }}>
      <S.InputTitle>{label}</S.InputTitle>
      <S.TextInput
        numberOfLines={4}
        maxLength={maxLength}
        multiline
        style={{ height }}
        {...rest}
      />
    </S.InputContainer>
  );
}
