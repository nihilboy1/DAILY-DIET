import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealProps } from "../../screens/Home";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function mealRegister(newMeal: mealProps) {
  try {
    const storedMeals = await getAllMeals();

    const mealsToStore = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, mealsToStore);
  } catch (error) {}
}
