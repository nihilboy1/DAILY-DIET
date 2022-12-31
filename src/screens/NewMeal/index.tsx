import { TextInput, View, Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../components/Input";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { InputTitle, Picker } from "../../components/Input/styles";

export function NewMeal() {
  const navigation = useNavigation();
  const [hideDateModal, setHideDateModal] = useState(false);
  const [hideTimeModal, setHideTimeModal] = useState(false);

  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date());

  const handleSetDate = (timeStamp: number | undefined) => {
    if (timeStamp) {
      const currentDate = new Date(timeStamp);
      console.log(currentDate.toString());
      console.log(String(currentDate).slice(10, 20));
    }
    setHideDateModal(false);
  };

  const handleSetTime = (timeStamp: number | undefined) => {
    if (timeStamp) {
      setTime(new Date(timeStamp));
    }
    setHideTimeModal(false);
  };

  function MoveToHome() {
    navigation.navigate("home");
  }
  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity
          onPress={MoveToHome}
          style={{ position: "absolute", left: 32, top: 25 }}
        >
          <ArrowLeft color={theme.colors.gray_500} weight="bold" />
        </TouchableOpacity>
        <S.HeaderText>Nova Refeição</S.HeaderText>
      </S.Header>
      <S.InputsBox>
        <Input label="Nome" />
        <Input label="Descrição" h={120} max={170} />
        <S.DateTimeBox>
          <S.OpenDateTimePicker onPress={() => setHideDateModal(true)}>
            <InputTitle>Data</InputTitle>
            <Picker style={{ width: "48%" }} />
          </S.OpenDateTimePicker>
          {hideDateModal && (
            <RNDateTimePicker
              value={date}
              mode="date"
              onChange={(event) => handleSetDate(event.nativeEvent.timestamp)}
            />
          )}
          <S.OpenDateTimePicker onPress={() => setHideTimeModal(true)}>
            <InputTitle>Hora</InputTitle>
          </S.OpenDateTimePicker>
          {hideTimeModal && (
            <RNDateTimePicker
              value={date}
              mode="time"
              onChange={(event) => handleSetTime(event.nativeEvent.timestamp)}
            />
          )}
        </S.DateTimeBox>
      </S.InputsBox>
    </S.Container>
  );
}
