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
import { useState } from "react";
import { Chip } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { themeColors, fontSize } from "../styles/base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
import Basics from "./Basics";
import MoreInfo from "./MoreInfo";
export default function YourInfo({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [phone, onChangeTextPhone] = React.useState("");
  const [password, onChangeTextPassword] = React.useState("");
  const [confirmPassword, onChangeTextConfirmPassword] = React.useState("");
  const dataSource = [
    "Walking",
    "Reading",
    "Foodie Tour",
    "Cricket",
    "BasketBall",
    "Hockey",
    "Tennis",
    "Self care",
    "Social Media",
    "Singing",
    "Painting",
    "Poetry",
    "Start ups",
    "Football",
    "Motor sports",
    "Fishing",
    "Hicking",
    "Cartoons",
    "Anime",
    "Cooking",
    "Gardening",
    "Iced Tea",
    "Writing",
    "Wine",
    "Camping",
    "Outdoors",
    "BTS",
    "90s Kid",
    "Freelance",
    "Stock Exchanger",
    "Country",
    "Coffee",
    "Netflix",
    "OTT",
    "Blogging",
    "Fasion",
    "Tech",
    "Vlogging",
  ];
  const [selectedInterests, seteSlectedInterests] = useState([]);
  const [isInterestOpen, setisInterestOpen] = useState(false);
  function addInterstItems(item) {
    if (!selectedInterests.includes(item)) {
      selectedInterests.length < 6 ? seteSlectedInterests((inItems) => [item, ...inItems]) : null;
    } else {
      let index = selectedInterests.indexOf(item);
      selectedInterests.splice(index, 1);
      seteSlectedInterests((inItems) => [...inItems]);
    }
  }
  return (
    <KeyboardAwareScrollView>
      <View style={styles.mainDiv}>
        <Text style={styles.headerTitle}>Complete Your Profile</Text>

        <View style={styles.profileImages}>
          <View style={styles.yourInfoTitle}>
            <Text style={styles.imageTitle}>Photos and Videos</Text>
          </View>

          <View style={styles.yourImages}>
            <View style={styles.imageGrid}>
              <View style={styles.image}>
                <Image style={styles.img} source={require("../assets/test1.jpg")} />
              </View>
              <View style={styles.image}>
                <Image style={styles.img} source={require("../assets/test2.jpg")} />
              </View>
              <View style={styles.image}>
                <Image style={styles.img} source={require("../assets/test3.jpg")} />
              </View>
            </View>
            <View style={[styles.imageGrid]}>
              <View style={styles.image}>
                <Image style={styles.img} source={require("../assets/test2.jpg")} />
              </View>
              <View style={styles.image}>
                <Image style={styles.img} source={require("../assets/test3.jpg")} />
              </View>
              <View style={styles.image}>
                <Image style={styles.img} source={require("../assets/test1.jpg")} />
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.yourInfoTitle}>
            <Text style={styles.imageTitle} onPress={() => setisInterestOpen((currentState) => !currentState)}>
              Your Interests <Text style={styles.normalText}>({isInterestOpen ? "Hide" : "Show"})</Text>
            </Text>
          </View>
          {isInterestOpen ? (
            <View>
              <Text style={styles.normalText}>Your selections (max 6)</Text>
              <View style={styles.interestGrid}>
                {selectedInterests.map((item, index) => {
                  return (
                    <View style={{ margin: 4, flexWrap: "wrap" }}>
                      <Chip
                        key={index}
                        mode="outlined" //changing display mode, default is flat.
                        height={33} //give desirable height to chip
                        style={{ borderWidth: 2, borderColor: themeColors.primary, backgroundColor: "white" }}
                        textStyle={{ color: "white", fontSize: 15 }} //label properties
                      >
                        <Text>{item}</Text>
                      </Chip>
                    </View>
                  );
                })}
              </View>

              <Text style={styles.normalText}>Select From Below</Text>
              <View style={styles.interestGrid}>
                {dataSource.map((item, index) => {
                  return (
                    <View style={{ margin: 4, flexWrap: "wrap" }}>
                      <Chip
                        key={index}
                        mode="outlined" //changing display mode, default is flat.
                        height={33} //give desirable height to chip
                        onPress={() => addInterstItems(item)}
                        style={[
                          selectedInterests.includes(item)
                            ? { backgroundColor: themeColors.primary }
                            : { backgroundColor: "white" },
                          { borderWidth: 2, borderColor: themeColors.primary },
                        ]}
                        textStyle={{ color: "white", fontSize: 15 }} //label properties
                      >
                        <Text>{item}</Text>
                      </Chip>
                    </View>
                  );
                })}
              </View>
            </View>
          ) : (
            <Text></Text>
          )}
        </View>

        <View>
          <Basics></Basics>
        </View>

        <View>
          <MoreInfo></MoreInfo>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: fontSize.large,
    marginTop: 70,
    marginLeft: 20,
    fontWeight: 700,
  },
  normalText: {
    marginTop: 10,
    marginLeft: 20,
    fontWeight: 500,
  },
  yourInfoTitle: {
    width: "100%",
    height: 45,
    display: "flex",
    backgroundColor: themeColors.primary,
  },
  profileImages: {
    marginTop: 20,
  },
  imageTitle: {
    fontSize: fontSize.md,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: 500,
  },
  yourImages: {
    height: 300,
    padding: 3,
    marginLeft: 12,
  },
  imageGrid: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    height: 50,
  },
  interestGrid: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  image: {
    width: "31%",
    height: "100%",
    margin: 4,
  },
  img: {
    width: "100%",
    height: "90%",
    borderRadius: 15,
  },
});
