import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealProps } from "../../screens/Home";
import { MEAL_COLLECTION } from "../storageConfig";
import { readMeals } from "./readMeals";

export async function createMeal(newMeal: mealProps) {
  try {
    const storedMeals = await readMeals();

    const mealsToStore = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, mealsToStore);
  } catch (error) {}
}
