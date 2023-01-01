import { MEAL_COLLECTION } from "../storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealProps } from "../../screens/Home";

export async function getAllMeals() {
  // Pega todo o conteudo armazenado na chave em questão
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: mealProps[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
