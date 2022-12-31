import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.gray_400};
`;

export const Header = styled.View`
  padding: 28px;
  padding-bottom: 35px;
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
  padding: 32px;
`;

export const DateTimeBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid;
`;

export const OpenDateTimePicker = styled.TouchableOpacity`
  border: 1px solid;
`;
