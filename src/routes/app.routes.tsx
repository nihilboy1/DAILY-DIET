import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Statistics } from "../screens/Statistics";
import { NewMeal } from "../screens/NewMeal";
import { MealInfos } from "../screens/MealInfos";
import { EditMeal } from "../screens/EditMeal";
import { FinishScreen } from "../screens/FinishScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="mealInfos" component={MealInfos} />
      <Screen name="editMeal" component={EditMeal} />
      <Screen name="finish" component={FinishScreen} />
    </Navigator>
  );
}
