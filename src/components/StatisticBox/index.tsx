import theme from "../../theme";
import * as S from "./styles";

interface StatisticBoxProps {
  desc: string;
  w: string;
  bgc?: string;
  value: number;
}

export function StatisticBox({
  w,
  desc,
  bgc = theme.colors.gray_100,
  value,
}: StatisticBoxProps) {
  return (
    <S.Container style={{ backgroundColor: bgc, width: w }}>
      <S.NumberText>{value}</S.NumberText>
      <S.DescriptionText>{desc}</S.DescriptionText>
    </S.Container>
  );
}
