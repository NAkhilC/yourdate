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
  TouchableOpacity,
  Dropdown,
} from "react-native";
import { styles } from "../styles/appStyles";
import { useState, useRef } from "react";
import { themeColors, fontSize } from "../styles/base";
import { RadioButton } from "react-native-paper";
import React from "react";
import { locations } from "../data/location";
import SelectDropdown from "react-native-select-dropdown";
export default function MoreInfo({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [phone, onChangeTextPhone] = React.useState("");
  const [password, onChangeTextPassword] = React.useState("");
  const [confirmPassword, onChangeTextConfirmPassword] = React.useState("");
  const [selectedInterests, seteSlectedInterests] = useState([]);
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);
  const [workTitle, onChangeworkTitle] = React.useState("");
  const [workCompany, onChangeworkCompany] = React.useState("");
  const [institution, setInstitution] = React.useState("");
  const [graduationYear, setGraduationYear] = React.useState("");
  const [educationLevel, setEducationLevel] = React.useState("male");
  const [selected, setSelected] = useState(undefined);
  const [province, setProvince] = useState("select height");
  const dropdownCityTown = useRef({});
  const [allProvLocations, setallProvLocations] = useState();
  const provinces = [
    "<4'0''",
    "4'1''",
    "4'2''",
    "4'3''",
    "4'4''",
    "4'5''",
    "4'6''",
    "4'7''",
    "4'8''",
    "4'9''",
    "4'10''",
    "4'11''",
    "5'0''",
    "5'1''",
    "5'2''",
    "5'3''",
    "5'4''",
    "5'5''",
    "5'6''",
    "5'7''",
    "5'8''",
    "5'9''",
    "5'10''",
    "5'11''",
    "6'0''",
    "6'1''",
    "6'2''",
    "6'3''",
    "6'4''",
    "6'5''",
    "6'6''",
    "6'7''",
    "6'8''",
    "6'9''",
    "6'10''",
    "6'11''",
    "7'0''",
    "7'1''",
    "7'2''",
    "7'3''",
    "7'4''",
    "7'5''>",
  ];
  const educationCat = [
    { label: "test", value: "test" },
    { label: "test", value: "test" },
    { label: "test", value: "test" },
  ];

  return (
    <View>
      <View style={styles.yourInfoTitle}>
        <Text style={styles.imageTitle} onPress={() => setIsMoreInfoOpen((currentState) => !currentState)}>
          More Info about you <Text style={styles.normalText}>({isMoreInfoOpen ? "Hide" : "Show"})</Text>
        </Text>
      </View>

      {isMoreInfoOpen ? (
        <View>
          <View>
            <View style={styles.basicsInfoSubTitle}>
              <Text style={styles.basicsInfoSubTitleText}>Height</Text>
            </View>
            <View style={styles.viewContainer}>
              <SelectDropdown
                data={provinces}
                defaultButtonText={province}
                buttonStyle={styles.dropdown4BtnStyle}
                buttonTextStyle={styles.dropdown4BtnTxtStyle}
                dropdownStyle={styles.dropdown4DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                onSelect={(selectedItem, index) => {}}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
          </View>
          {/*  Graduation level */}
          <View>
            <View style={styles.basicsInfoSubTitle}>
              <Text style={styles.basicsInfoSubTitleText}>Graduation Level</Text>
            </View>
            <View style={styles.viewContainer}>
              <RadioButton.Group
                onValueChange={(value) => {
                  setEducationLevel(value);
                }}
                value={educationLevel}
              >
                {educationCat.forEach((educationLevel) => {
                  console.log(educationLevel.label);
                  <RadioButton.Item label={educationLevel.label} value={educationLevel.value} />;
                  <RadioButton.Item label="test" value="test" />;
                })}
                {/* <RadioButton.Item label="High School" value="High School" />
                <RadioButton.Item label="Tech School" value="Tech School" />
                <RadioButton.Item label="College" value="College" />
                <RadioButton.Item label="im Grad" value="in Grad" />
                <RadioButton.Item label="Grad Degree" value="Grad Degree" />
                <RadioButton.Item label="Masters" value="Masters" />
                <RadioButton.Item label="Post Grad" value="Post Grad" /> */}
              </RadioButton.Group>
            </View>
          </View>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}
// const Style = StyleSheet.create({
//   dropdown4DropdownStyle: { backgroundColor: themeColors.peimarynext },
//   dropdown4RowStyle: { backgroundColor: themeColors.peimarynext, borderBottomColor: "#C5C5C5" },
//   dropdown4RowTxtStyle: { color: "#444", textAlign: "right" },
//   dropdown4BtnStyle: {
//     width: "95%",
//     height: 50,
//     marginTop: 10,
//     backgroundColor: "white",
//     borderRadius: 8,
//   },
//   viewContainer: {
//     marginLeft: "20%",
//   },
//   dropdown4BtnTxtStyle: { color: "#444", textAlign: "center" },
// });
