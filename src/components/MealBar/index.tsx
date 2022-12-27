import * as S from "./styles";

export function MealBar({ data }: any) {
  return (
    <S.Container>
      <S.TextBox>
        <S.TimeStampBox>{data.hour}</S.TimeStampBox>
        <S.MealName>{data.mealName}</S.MealName>
      </S.TextBox>
    </S.Container>
  );
}
