import { View, Text, SectionList } from "react-native";
import * as S from "./styles";
import { sectionListDataProps } from "../../screens/Home";
import { MealBar } from "../MealBar";

interface MealHistoryProps {
  groupedMeals: sectionListDataProps[];
}

export function MealHistory({ groupedMeals }: MealHistoryProps) {
  return (
    <S.Container>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={groupedMeals}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item) => item.mealName}
        renderSectionHeader={({ section: { title } }) => (
          <S.TitleText>{title}</S.TitleText>
        )}
        renderItem={({ item }) => <MealBar data={item} />}
      />
    </S.Container>
  );
}
