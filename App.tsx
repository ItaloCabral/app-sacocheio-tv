import React from "react";
import AppStack from "./src/routes";
import {} from "styled-components/native";
import { useFonts } from "expo-font";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <AppStack />;
}
