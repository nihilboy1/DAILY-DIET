import * as S from "./styles";

interface Props {
  label: string;
  value: string;
  height?: number;
  maxLength?: number;
  width?: string;
  setValue: (value: string) => void;
}

export function Input({
  label,
  height = 50,
  maxLength = 40,
  width = "100%",
  setValue,
  value,
}: Props) {
  return (
    <S.InputContainer style={{ width }}>
      <S.InputTitle>{label}</S.InputTitle>
      <S.TextInput
        numberOfLines={4}
        maxLength={maxLength}
        multiline
        style={{ height }}
        value={value}
        onChange={(e) => setValue(e.nativeEvent.text)}
      />
    </S.InputContainer>
  );
}
