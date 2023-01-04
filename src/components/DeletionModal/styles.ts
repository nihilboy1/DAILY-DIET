import styled from "styled-components/native";

export const ContentModalBox = styled.View`
  padding: 30px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ConfirmDeletionBox = styled.View`
  padding: 21px;
  background-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 12px;
`;

export const ButtonsBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.lg};
  color: ${({ theme }) => theme.colors.gray_600};
  text-align: center;
  padding: 15px;
  margin-bottom: 20px;
`;
