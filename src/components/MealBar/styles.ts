import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 16px 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  border-radius: 8px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextBox = styled.View`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md};
  color: ${({ theme }) => theme.colors.gray_600};
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const TimeStampBox = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  padding-right: 10px;
  border-right-color: ${({ theme }) => theme.colors.gray_500};
  border-right-width: 1px;
`;

export const MealName = styled.Text`
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.lg};
  color: ${({ theme }) => theme.colors.gray_600};
  padding-left: 10px;
`;
