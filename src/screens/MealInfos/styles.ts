import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface ContainerProps {
  insideTheDiet: boolean;
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  background-color: ${({ theme, insideTheDiet }) =>
    insideTheDiet ? theme.colors.green_mid : theme.colors.red_mid};
`;

export const Header = styled.View`
  padding: 28px;
  padding-bottom: 55px;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xl};
`;

export const InputsBox = styled.View`
  height: 90%
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  padding: 32px;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xl};
  margin-bottom: 8px;
`;

export const NormalText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.lg};
  margin-bottom: 12px;
`;

export const InsideTheDietLabelText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md};
  width: 120px;
  text-align: center;
`;

export const InsideDietLabel = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_200}
  width: 180px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 100px;
  align-items: center;
  padding: 14px 16px;
`;

export const ButtonsBox = styled.View`
  height: 140px;
  justify-content: space-between;
  margin-bottom: 50px;
`;

