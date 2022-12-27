import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold}
  font-size: ${({ theme }) => theme.font_size.lg};
  color: ${({ theme }) => theme.colors.gray_600};
  margin-top: 30px;
`;
