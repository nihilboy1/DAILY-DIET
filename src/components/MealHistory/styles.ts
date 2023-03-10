import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  height: 460px;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold}
  font-size: ${({ theme }) => theme.font_size.xl};
  color: ${({ theme }) => theme.colors.gray_600};
  margin-top: 20px;
`;

export const EmptyBox = styled.View`
  height: 300px;
  align-items: center;
  justify-content: center;
`;

export const EmptyBoxText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xl};
  color: ${({ theme }) => theme.colors.gray_600};
  text-align: center;
`;
