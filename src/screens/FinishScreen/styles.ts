import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  border: 1px solid;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xxl};
  margin-bottom: 20px;
`;

export const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_600};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md};
  margin-bottom: 50px;
  text-align: center;
  width: 350px;
`;

export const ButtonContainer = styled.View`
  width: 240px;
  margin-top: 50px;
`;
