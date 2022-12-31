import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealProps } from "../../screens/Home";
import { MEAL_COLLECTION } from "../storageConfig";

export async function getAllMeals() {
  // Pega todo o conteudo armazeado na chave em questão
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: mealProps[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
