import { SectionList, Text } from "react-native";

import { sectionListDataProps } from "../../screens/Home";
import { MealBar } from "../MealBar";
import * as S from "./styles";

interface MealHistoryProps {
  groupedMeals: sectionListDataProps[];
}

export function MealHistory({ groupedMeals }: MealHistoryProps) {
  return (
    <S.Container>
      <SectionList
        ListEmptyComponent={<Text>Que tal cadastrar uma refeição?</Text>}
        showsVerticalScrollIndicator={false}
        sections={groupedMeals}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <S.TitleText>{title}</S.TitleText>
        )}
        renderItem={({ item }) => <MealBar key={item.id} data={item} />}
      />
    </S.Container>
  );
}
