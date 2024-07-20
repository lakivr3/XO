import React, { useEffect } from "react";

import { SplashScreen, Stack } from "expo-router";
import {
  useFonts as useRaleway,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [ralewayLoaded] = useRaleway({
    Raleway_400Regular,
  });

  useEffect(() => {
    if (ralewayLoaded) SplashScreen.hideAsync();
  }, [ralewayLoaded]);
  if (!ralewayLoaded) return null;

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
