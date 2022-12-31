import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  padding: 30px;
`;

export const ButtonContainer = styled.View`
  margin-top: 40px;
`;

export const LabelText = styled.Text`
    font-family: ${({ theme }) => theme.font_family.regular}
    font-size: ${({ theme }) => theme.font_size.lg};
    color: ${({ theme }) => theme.colors.gray_600}
    margin-bottom: 10px;
`;
