import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.green_light};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.green_dark,
}))``;
