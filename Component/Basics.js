import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState, useRef } from "react";
import { themeColors, fontSize } from "../styles/base";
import { RadioButton } from "react-native-paper";
import React from "react";
import { locations } from "../data/location";
import { styles } from "../styles/appStyles";
import SelectDropdown from "react-native-select-dropdown";
export default function Basics({ navigation }) {
  const [isBasicsOpen, setIsBasicsOpen] = useState(false);
  const [workTitle, onChangeworkTitle] = React.useState("");
  const [workCompany, onChangeworkCompany] = React.useState("");
  const [institution, setInstitution] = React.useState("");
  const [graduationYear, setGraduationYear] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [selected, setSelected] = useState(undefined);
  const [province, setProvince] = useState("Alberta");
  const dropdownCityTown = useRef({});
  const [allProvLocations, setallProvLocations] = useState();
  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];

  function check(checkedItem) {
    setProvince(checkedItem);
    dropdownCityTown.current.reset();
    setallProvLocations([]);
    let index = locations.location
      .map((prov, index) => {
        if (prov.Province.includes(checkedItem)) {
          return index;
        }
        return false;
      })
      .filter(Boolean);
    index = index[0];
    let allProvLocations;
    if (index >= 0) {
      let allcities = locations.location[index].City;
      allProvLocations = allcities.concat(locations.location[index].Town);
      setallProvLocations(allProvLocations);
    }
  }

  return (
    <View>
      <View style={styles.yourInfoTitle}>
        <Text style={styles.imageTitle} onPress={() => setIsBasicsOpen((currentState) => !currentState)}>
          My Basics <Text style={styles.normalText}>({isBasicsOpen ? "Hide" : "Show"})</Text>
        </Text>
      </View>

      {isBasicsOpen ? (
        <View>
          {/* Work View */}
          <View>
            <View style={styles.basicsInfoSubTitle}>
              <Text style={styles.basicsInfoSubTitleText}>Work</Text>
            </View>
            <View>
              <TextInput style={styles.input} onChangeText={onChangeworkTitle} value={workTitle} placeholder="Role" />
              <TextInput
                style={styles.input}
                onChangeText={onChangeworkCompany}
                value={workCompany}
                placeholder="Company"
              />
            </View>
          </View>

          {/* School View */}
          <View>
            <View style={styles.basicsInfoSubTitle}>
              <Text style={styles.basicsInfoSubTitleText}>School</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={setInstitution}
                value={institution}
                placeholder="Institution"
              />
              <TextInput
                style={styles.input}
                onChangeText={setGraduationYear}
                value={graduationYear.replace(/[^0-9]/g, "")}
                maxLength={4}
                min={2000}
                keyboardType="phone-pad"
                placeholder="Graduation Year"
              />
            </View>
          </View>

          {/* Gender View */}
          <View>
            <View style={styles.basicsInfoSubTitle}>
              <Text style={styles.basicsInfoSubTitleText}>Gender</Text>
            </View>
            <View style={{ marginLeft: 5 }}>
              <RadioButton.Group
                onValueChange={(value) => {
                  setGender(value);
                }}
                value={gender}
              >
                <RadioButton.Item label="Male" value="male" />
                <RadioButton.Item label="Female" value="female" />
                <RadioButton.Item label="Other" value="other" />
              </RadioButton.Group>
            </View>
          </View>

          {/* HomeTown View */}
          <View>
            <View style={styles.basicsInfoSubTitle}>
              <Text style={styles.basicsInfoSubTitleText}>Hometown</Text>
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
                onSelect={(selectedItem, index) => {
                  check(selectedItem);
                }}
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
              <SelectDropdown
                data={allProvLocations}
                onSelect={(selectedItem, index) => {}}
                ref={dropdownCityTown}
                buttonStyle={styles.dropdown4BtnStyle}
                buttonTextStyle={styles.dropdown4BtnTxtStyle}
                dropdownStyle={styles.dropdown4DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                buttonTextAfterSelection={(selectedItem, index) => {
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
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}
