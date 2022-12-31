import styled from "styled-components/native";

export const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export const InputTitle = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md};
  margin-bottom: 5px;
`;

export const TextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md};
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  padding: 0px 20px;
  border-radius: 8px;
`;

export const Picker = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  border-radius: 8px;
  height: 50px;
  justify-content: center;
  padding-left: 15px;
`;
