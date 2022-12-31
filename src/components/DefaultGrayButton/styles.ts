import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 18px;
  border: 1px solid;
  background-color: ${({ theme }) => theme.colors.gray_600};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.lg};
`;
