import { SectionList } from "react-native";

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
        ListEmptyComponent={
          <S.EmptyBox>
            <S.EmptyBoxText>Que tal cadastrar uma refeição?</S.EmptyBoxText>
          </S.EmptyBox>
        }
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
