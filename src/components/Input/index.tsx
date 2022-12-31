import { TouchableOpacity, Text } from "react-native";
import * as S from "./styles";

interface InputProps {
  label: string;
  h?: number;
  max?: number;
  w?: string;

}

export function Input({ label, h = 50, max = 40, w = "100%" }: InputProps) {
  return (
    <S.InputContainer style={{ width: w }}>
      <S.InputTitle>{label}</S.InputTitle>

      <S.TextInput
        numberOfLines={4}
        maxLength={max}
        multiline
        style={{ height: h }}
      />
    </S.InputContainer>
  );
}
