import React from 'react';
import { useFonts, Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import { Background } from './src/components/Background';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return(
      <AppLoading />
    )
  }

  return (
    <Background>
      <StatusBar
        backgroundColor='transparent'
        translucent
        style='light'/>
      <Home />
    </Background>
  );
}
