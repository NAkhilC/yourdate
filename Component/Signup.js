import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
export default function Signup({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [phone, onChangeTextPhone] = React.useState("");
  const [password, onChangeTextPassword] = React.useState("");
  const [confirmPassword, onChangeTextConfirmPassword] = React.useState("");
  return (
    <KeyboardAwareScrollView>
      <View style={styles.mainDiv}>
        <Image style={styles.img} source={require("../assets/signup.jpg")} />
        <Text style={styles.signUpText}>Sign Up to a lovely life</Text>
        <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} placeholder="Email" />
        <TextInput style={styles.input} onChangeText={onChangeUsername} value={username} placeholder="Username" />
        <TextInput style={styles.input} onChangeText={onChangeTextPhone} value={phone} placeholder="Phone Number" />
        <TextInput style={styles.input} onChangeText={onChangeTextPassword} value={password} placeholder="Password" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeTextConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm Password"
        />
        <View style={styles.button}>
          <Button color="black" title="Sign Up"></Button>
        </View>
        <View style={styles.button}>
          <Button color="black" title="Back to Login" onPress={() => navigation.navigate("Login")}></Button>
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
    width: "40%",
    height: "30%",
    marginLeft: "30%",
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  mainDiv: {
    width: 400,
    marginTop: 50,
    padding: 15,
    flex: 1,
    marginBottom: 150,
  },

  mainDiv1: {
    backgroundColor: "#dcf2f1",
    bottom: 0,
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
    backgroundColor: "#f7ce25",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 60,
    borderRadius: 20,
    padding: 10,
    fontWeight: 700,
  },
});
