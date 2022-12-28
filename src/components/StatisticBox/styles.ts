import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
`;

export const NumberText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xxl};
  margin-bottom: 10px;
`;

export const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.lg};
  color: ${({ theme }) => theme.colors.gray_600};
  text-align: center;
`;
