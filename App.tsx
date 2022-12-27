import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";
import theme from "./src/theme";

export default function App() {
  const [fontsAreLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsAreLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
