import { View, Text, SectionList } from "react-native";
import * as S from "./styles";
import { sectionListDataProps } from "../../screens/Home";
import { MealBar } from "../MealBar";

interface MealHistoryProps {
  groupedMeals?: sectionListDataProps[];
}

export function MealHistory({ groupedMeals }: MealHistoryProps) {
  return groupedMeals ? (
    <S.Container>
      <SectionList
        sections={groupedMeals}
        keyExtractor={(item) => (item as any).mealName}
        renderItem={({ item }) => <MealBar data={item} />}
        renderSectionHeader={({ section: { title } }: any) => (
          <S.TitleText>{title}</S.TitleText>
        )}
      />
    </S.Container>
  ) : (
    <View></View>
  );
}
