import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const NewExpensesScreen = ({ navigation }) => {
  const [expenseType, setExpenseType] = useState("Business Trip");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [reason, setReason] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Expenses</Text>
        {/* <TouchableOpacity>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity> */}
      </View>

      <View style={styles.card}>
        {/* Expense Type */}
        <View style={styles.input} >
        <Picker
          selectedValue={expenseType}
          onValueChange={(itemValue) => setExpenseType(itemValue)}
        >
          <Picker.Item label="Business Trip" value="Business Trip" />
          <Picker.Item label="Client Meeting" value="Client Meeting" />
          <Picker.Item label="Office Supplies" value="Office Supplies" />
        </Picker>

        </View>

        {/* Cost */}
        <View style={styles.row}>
          <TextInput
            style={styles.cost}
            placeholder="Cost"
            keyboardType="numeric"
            value={cost}
            onChangeText={setCost}
          />
          <View style={styles.currencyPicker}>

          <Picker
            selectedValue={currency}
            onValueChange={(itemValue) => setCurrency(itemValue)}
            
            placeholder="Cost"

          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="LKR" value="LKR" />
          </Picker>
          </View>
        </View>

        {/* Date Picker */}
        <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
          <Text style={{ color: date ? "black" : "gray" }}>
            {date ? date.toDateString() : "Select Date"}
          </Text>
          <Ionicons name="calendar-outline" size={24} color="gray" />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {/* Reason */}
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Reason"
          multiline
          numberOfLines={3}
          value={reason}
          onChangeText={setReason}
        />

        {/* Image Picker */}
        <View style={styles.imageRow}>
          <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
            <Ionicons name="camera-outline" size={30} color="gray" />
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.imageBox} />}
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.addMoreBtn}>
          <Text style={styles.addMoreText}>Add More +</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Send request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6371F1",
  },
  header: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 110,
  },
  headerTitle: {
    alignItems: "center",
    textAlign:"center",
    color: 'white',
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    // margin: 15,
    padding: 40,
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 2,
    marginTop: 30,
    paddingBottom: 70,
  },
  input: {
    backgroundColor: "#F3F4F6",
    padding: 12,
    borderRadius: 25,
    marginVertical: 8,
    
  },
  cost: {
    backgroundColor: "#F3F4F6",
    padding: 12,
    borderRadius: 25,
    marginVertical: 8,
    width: 180,
    height: 55,
    
  },
  textArea: {
    height: 80,
  },
  row: {
    justifyContent:"space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  currencyPicker: {
    backgroundColor: "#F3F4F6",
    borderRadius: 25,
    width: 110,
    marginLeft: 10,
  },
  dateInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: 12,
    borderRadius: 25,
    marginVertical: 8,
  },
  imageRow: {
    flexDirection: "row",
    marginVertical: 10,
  },
  imageBox: {
    width: 60,
    height: 60,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  addMoreBtn: {
    backgroundColor: "#E0E7FF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  addMoreText: {
    color: "#6366F1",
    fontWeight: "bold",
  },
  submitBtn: {
    backgroundColor: "#6366F1",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default NewExpensesScreen;
