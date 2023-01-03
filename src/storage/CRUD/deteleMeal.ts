import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { readMeals } from "./readMeals";

export interface mealProps {
  id: string;
  mealName: string;
  description: string;
  date: string;
  hour: string;
  insideTheDiet: boolean;
}

export interface sectionListDataProps {
  title: string;
  data: mealProps[];
}

export async function deleteMeal(id: string) {
  try {
    // Obter todas as refeições armazenadas
    const storedMeals = await readMeals();

    // Criar um novo array com todas as refeições, exceto aquela com o ID especificado
    const filteredMeals = storedMeals.filter(
      (meal: mealProps) => meal.id !== id
    );

    // Armazenar o novo array de refeições no armazenamento
    const mealsToStore = JSON.stringify(filteredMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, mealsToStore);
  } catch (error) {
    console.log(error);
  }
}
