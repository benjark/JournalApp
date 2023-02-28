import {React} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {StyleSheet,Text,View,Pressable} from 'react-native';
import { useFonts } from "expo-font";
import Tabs from './navigation/tabs';
import Add from "./src/Add";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  const [loaded] = useFonts({InterBold: require("./assets/fonts/Inter-Bold.ttf"),InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),InterMedium: require("./assets/fonts/Inter-Medium.ttf"),InterRegular: require("./assets/fonts/Inter-Regular.ttf"),InterLight: require("./assets/fonts/Inter-Light.ttf"),});
  if (!loaded) return null;

return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            //  this is what removes the header! 
            headerShown:false}}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Add"
          component={Add}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;