import * as S from "./styles";

interface InputProps {
  label: string;
  h?: number;
  max?: number;
  w?: string;
  setValue: (value: string) => void;
}

export function Input({
  label,
  h = 50,
  max = 40,
  w = "100%",
  setValue,
}: InputProps) {
  return (
    <S.InputContainer style={{ width: w }}>
      <S.InputTitle>{label}</S.InputTitle>

      <S.TextInput
        numberOfLines={4}
        maxLength={max}
        multiline
        style={{ height: h }}
        onChange={(e) => setValue(e.nativeEvent.text)}
      />
    </S.InputContainer>
  );
}
