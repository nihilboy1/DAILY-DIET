import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const StatusBox = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 20px;
  height: 650px;
  border-radius: 30px;
  align-items: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.lg};
  margin: 10px 0px 30px 0px;
`;

export const InOrOutBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ScrollViewContainer = styled.ScrollView`
  height: 110%;
`;
