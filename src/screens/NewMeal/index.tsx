import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Circle } from "phosphor-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";

import { DefaultGrayButton } from "../../components/DefaultGrayButton";
import { Input } from "../../components/Input";
import { InputTitle, Picker } from "../../components/Input/styles";
import { createMeal } from "../../storage/CRUD/createMeal";
import theme from "../../theme";
import * as S from "./styles";

export function NewMeal() {
  const navigation = useNavigation();
  const [date, setDate] = useState<Date>(new Date());
  const [hideDateModal, setHideDateModal] = useState(false);
  const [hideTimeModal, setHideTimeModal] = useState(false);
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

  const handleSetMeal = async () => {
    const mealObject = {
      id: String(uuid.v4()),
      mealName: mealName,
      description: mealDescription,
      date: dayMonthYear,
      hour: hourMinutes,
      insideTheDiet: insideTheDietMeal as boolean,
    };

    try {
      await createMeal(mealObject);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(mealObject.insideTheDiet);
      moveToFinishScreen(mealObject.insideTheDiet);
    }
  };

  function moveToHome() {
    navigation.navigate("home");
  }

  function moveToFinishScreen(insideTheDiet: boolean) {
    navigation.navigate("finish", { insideTheDiet });
  }

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
        <Input label="Nome" setValue={setMealName} value={mealName} />
        <Input
          value={mealDescription}
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
        <DefaultGrayButton
          text="Cadastrar refeição"
          onPress={handleSetMeal}
          disabled={
            mealName &&
            hourMinutes &&
            dayMonthYear &&
            insideTheDietMeal != undefined
              ? false
              : true
          }
        />
      </S.InputsBox>
    </S.Container>
  );
}
