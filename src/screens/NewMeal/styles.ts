import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.gray_400};
  flex: 1;
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

export const InputsBox = styled.ScrollView`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  padding: 32px;
`;

export const DateTimeBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InsideDietBox = styled.View`
  margin-top: 30px;
`;

export const TitleButtonsText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  margin-bottom: 8px;
`;

export const InsideDietButtonsBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InsideDietButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 120px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  margin-left: 5px;
`;

export const DateTimeText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md};
`;
