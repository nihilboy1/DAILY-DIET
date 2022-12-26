import { DefaultGrayButton } from "../DefaultGrayButton";
import * as S from "./styles";

export function AddNewMeal() {
  return (
    <S.Container>
      <S.LabelText>Refeições</S.LabelText>
      <DefaultGrayButton text="Nova Refeição"></DefaultGrayButton>
    </S.Container>
  );
}
