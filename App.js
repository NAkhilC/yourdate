import { StyleSheet, View } from "react-native";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import YourInfo from "./Component/yourInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
const Root = createNativeStackNavigator();
const navTheme = DefaultTheme;
navTheme.colors.background = "#fff1b8";
export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen name="Login" component={Login} />
        <Root.Screen name="Signup" component={Signup} />
        <Root.Screen name="info" component={YourInfo} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
