import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.gray_400};
`;

export const Header = styled.View`
  padding: 28px;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.lg};
`;

export const InputsBox = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
`;

export const InputContainer = styled.View``;

export const InputTitle = styled.View``;

export const TextInput = styled.TextInput``;
