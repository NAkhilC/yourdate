import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { themeColors } from "../styles/base";
import React from "react";
export default function Login({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangeTextPassword] = React.useState("");
  return (
    <KeyboardAwareScrollView>
      <View style={styles.mainDiv}>
        <Image style={styles.img} source={require("../assets/loginImage.jpg")} />
        <Text style={styles.signUpText}>Login to a your account</Text>
        <TextInput style={styles.input} onChangeText={onChangeUsername} value={username} placeholder="Username" />
        <TextInput style={styles.input} onChangeText={onChangeTextPassword} value={password} placeholder="Password" />
        <View style={styles.button}>
          <Button color="black" title="Login" onPress={() => navigation.navigate("info")}></Button>
        </View>
        <View style={styles.button}>
          <Button
            color="black"
            title="Don't have an accaount ? Sign Up"
            onPress={() => navigation.navigate("Signup")}
          ></Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "80%",
    height: "60%",
    marginLeft: "6%",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  mainDiv: {
    width: 400,
    marginTop: 100,
    padding: 15,
    flex: 1,
    marginBottom: 150,
  },

  mainDiv1: {
    // flex: 1,
  },
  signUpText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: themeColors.primary,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 60,
    borderRadius: 20,
    padding: 10,
    fontWeight: 700,
  },
});
