import styled from "styled-components/native";
import theme from "../../theme";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  margin-top: 25px;
  background-color: ${({ theme }) => theme.colors.green_light}
  align-items: center;
  padding: 20px;
  border-radius: 8px;
`;

export const Percentage = styled.Text`
font-family: ${({ theme }) => theme.font_family.bold}
  font-size: ${({ theme }) => theme.font_size.xxl};
`;

export const SpanText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_600};
`;

export const ArrowUpRightButton = styled.TouchableOpacity`
  position: absolute;
  right: 5px;
  top: 5px;
`;
