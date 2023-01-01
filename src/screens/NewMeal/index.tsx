import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Circle } from "phosphor-react-native";
import { useState } from "react";
import { flushSync } from "react-dom";
import { Text, TouchableOpacity } from "react-native";

import { Input } from "../../components/Input";
import { InputTitle, Picker } from "../../components/Input/styles";
import { mealRegister } from "../../storage/mealRegister/mealRegister";
import theme from "../../theme";
import { mealProps } from "../Home";
import * as S from "./styles";

export function NewMeal() {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [hideDateModal, setHideDateModal] = useState(false);
  const [hideTimeModal, setHideTimeModal] = useState(false);
  const [meal, setMeal] = useState<mealProps>();
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [hourMinutes, setHourMinutes] = useState("");
  const [dayMonthYear, setDayMonthYear] = useState("");
  const [insideTheDietMeal, setInsideTheDietMeal] = useState<
    boolean | undefined
  >(undefined);

  const handleSetDate = (timeStamp?: number) => {
    if (timeStamp) {
      const currentDate = new Date(timeStamp);
      setDate(currentDate);
      const day = currentDate.toLocaleDateString().slice(3, 5);
      const month = currentDate.toLocaleDateString().slice(0, 2);
      const year = currentDate.toLocaleDateString().slice(6);
      const hourMinutes = currentDate.toLocaleTimeString().slice(0, 5);
      setHourMinutes(hourMinutes);
      setDayMonthYear(`${day}/${month}/${year}`);
    }
    setHideDateModal(false);
    setHideTimeModal(false);
  };

  const moveToHome = async () => {
    console.log(meal);
    try {
      await mealRegister(meal as mealProps);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetMeal = () => {
    const mealObject = {
      mealName,
      description: mealDescription,
      date: dayMonthYear,
      hour: hourMinutes,
      insideTheDiet: insideTheDietMeal as boolean,
    };
    console.log(mealObject);

    flushSync(() => {
      setMeal(mealObject);
    });

    moveToHome();
  };

  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity
          onPress={() => moveToHome()}
          style={{
            position: "absolute",
            left: 28,
            top: 20,
            padding: 10,
          }}
        >
          <ArrowLeft color={theme.colors.gray_500} weight="bold" />
        </TouchableOpacity>
        <S.HeaderText>Nova Refeição</S.HeaderText>
      </S.Header>
      <S.InputsBox>
        <Input label="Nome" setValue={setMealName} />
        <Input
          label="Descrição"
          h={120}
          max={170}
          setValue={setMealDescription}
        />
        <S.DateTimeBox>
          <TouchableOpacity
            style={{ width: "48%" }}
            onPress={() => setHideDateModal(true)}
          >
            <InputTitle>Data</InputTitle>
            <Picker>
              <S.DateTimeText>{dayMonthYear}</S.DateTimeText>
            </Picker>
          </TouchableOpacity>
          {hideDateModal && (
            <RNDateTimePicker
              style={{ backgroundColor: "red" }}
              value={date}
              mode="date"
              onChange={(event) => handleSetDate(event.nativeEvent.timestamp)}
            />
          )}
          <TouchableOpacity
            style={{ width: "48%" }}
            onPress={() => setHideTimeModal(true)}
          >
            <InputTitle>Hora</InputTitle>
            <Picker>
              <S.DateTimeText>{hourMinutes}</S.DateTimeText>
            </Picker>
          </TouchableOpacity>
          {hideTimeModal && (
            <RNDateTimePicker
              is24Hour={true}
              value={date}
              mode="time"
              onChange={(event) => handleSetDate(event.nativeEvent.timestamp)}
            />
          )}
        </S.DateTimeBox>
        <S.InsideDietBox>
          <Text>{JSON.stringify(meal)}</Text>
          <S.TitleButtonsText>Está dentro da dieta?</S.TitleButtonsText>
          <S.InsideDietButtonsBox>
            <S.InsideDietButton
              style={{
                width: "49%",
                backgroundColor:
                  insideTheDietMeal === undefined
                    ? theme.colors.gray_100
                    : insideTheDietMeal === false
                    ? theme.colors.gray_100
                    : theme.colors.green_light,

                borderWidth: 1,
                borderColor:
                  insideTheDietMeal === undefined
                    ? theme.colors.gray_100
                    : insideTheDietMeal === false
                    ? theme.colors.gray_100
                    : theme.colors.green_dark,
              }}
              onPress={() => setInsideTheDietMeal(true)}
            >
              <Circle weight="fill" size={12} color={theme.colors.green_dark} />
              <S.ButtonText>Sim</S.ButtonText>
            </S.InsideDietButton>
            <S.InsideDietButton
              style={{
                width: "49%",
                backgroundColor:
                  insideTheDietMeal === undefined
                    ? theme.colors.gray_100
                    : insideTheDietMeal === false
                    ? theme.colors.red_light
                    : theme.colors.gray_100,

                borderWidth: 1,
                borderColor:
                  insideTheDietMeal === undefined
                    ? theme.colors.gray_100
                    : insideTheDietMeal === false
                    ? theme.colors.red_dark
                    : theme.colors.gray_100,
              }}
              onPress={() => setInsideTheDietMeal(false)}
            >
              <Circle weight="fill" size={12} color={theme.colors.red_dark} />
              <S.ButtonText>Não</S.ButtonText>
            </S.InsideDietButton>
          </S.InsideDietButtonsBox>
        </S.InsideDietBox>
        <TouchableOpacity onPress={handleSetMeal}>
          <Text>Save</Text>
        </TouchableOpacity>
      </S.InputsBox>
    </S.Container>
  );
}
