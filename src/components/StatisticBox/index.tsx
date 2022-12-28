import theme from "../../theme";
import * as S from "./styles";

interface StatisticBoxProps {
  desc: string;
  w: string;
  bgc?: string;
}

export function StatisticBox({
  w,
  desc,
  bgc = theme.colors.gray_100,
}: StatisticBoxProps) {
  return (
    <S.Container style={{ backgroundColor: bgc, width: w }}>
      <S.NumberText>22</S.NumberText>
      <S.DescriptionText>{desc}</S.DescriptionText>
    </S.Container>
  );
}
