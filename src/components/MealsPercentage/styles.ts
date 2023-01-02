import styled from "styled-components/native";

interface ArrowButtonProps {
  routeName: string;
}

export const Container = styled.View`
  margin-top: 25px;
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
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md};
`;

export const ArrowButton = styled.TouchableOpacity<ArrowButtonProps>`
  position: absolute;
  right: ${(props) => (props.routeName === "home" ? "0px" : "95%")};
  padding: 10px;
`;
