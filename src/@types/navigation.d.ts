import { mealProps } from "../screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      statistics: undefined;
      home: undefined;
      newMeal: undefined;
      meal: { data: mealProps };
    }
  }
}
