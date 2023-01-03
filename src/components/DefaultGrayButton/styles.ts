import styled from "styled-components/native";

interface Props {
  negativeColors: boolean;
}
export const Container = styled.TouchableOpacity<Props>`
  padding: 18px;
  border: 1px solid;
  background-color: ${({ theme, negativeColors }) =>
    negativeColors ? theme.colors.white : theme.colors.gray_600};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`;

export const TextButton = styled.Text<Props>`
  color: ${({ theme, negativeColors }) =>
    negativeColors ? theme.colors.gray_600 : theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.lg};
`;
