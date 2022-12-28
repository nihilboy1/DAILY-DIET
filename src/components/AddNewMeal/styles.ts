import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const LabelText = styled.Text`
    font-family: ${({ theme }) => theme.font_family.regular}
    font-size: ${({ theme }) => theme.font_size.lg};
    color: ${({ theme }) => theme.colors.gray_600}
    margin-bottom: 10px;
`;
