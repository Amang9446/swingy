import { fontFamily } from "@/styles/fontStyles";
import { Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold, useFonts } from '@expo-google-fonts/quicksand';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import "../global.css";
export default function RootLayout() {
const [isFontLoaded, error ]  = useFonts({
  [fontFamily.quicksand]: Quicksand_400Regular,
  [fontFamily["quicksand-bold"]]: Quicksand_700Bold,
  [fontFamily["quicksand-light"]]: Quicksand_300Light,
  [fontFamily["quicksand-medium"]]: Quicksand_500Medium,
  [fontFamily["quicksand-semibold"]]: Quicksand_600SemiBold,
})

  useEffect(() => {
    if (error) throw error;
    if (isFontLoaded) SplashScreen.hideAsync();
  }, [isFontLoaded, error]);

  return <Stack screenOptions={{
    headerShown: false
  }}/>;
}
