import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";

const NewExpensesScreen = () => {
  const [expenseType, setExpenseType] = useState("Business Trip");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [note, setNote] = useState("");
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>New Expenses</Text>
      </View>

      {/* Expense Type Dropdown */}
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={expenseType}
          onValueChange={(itemValue) => setExpenseType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Business Trip" value="Business Trip" />
          <Picker.Item label="Business Conference" value="Business Conference" />
          <Picker.Item label="Office Supplies" value="Office Supplies" />
        </Picker>
      </View>

      {/* Cost Input */}
      <View style={styles.rowContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Cost"
          keyboardType="numeric"
          value={cost}
          onChangeText={setCost}
        />
        <View style={styles.currencyPicker}>
          <Picker
            selectedValue={currency}
            onValueChange={(itemValue) => setCurrency(itemValue)}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="LKR" value="LKR" />
          </Picker>
        </View>
      </View>

      {/* Date Picker */}
      <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text>{date.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      {/* Additional Note */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Additional Note"
        multiline
        value={note}
        onChangeText={setNote}
      />

      {/* Image Upload */}
      <TouchableOpacity style={styles.imageUpload} onPress={selectImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.uploadedImage} />
        ) : (
          <Text style={styles.imageText}>📷</Text>
        )}
      </TouchableOpacity>

      {/* Buttons */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addMoreButton}>
        <Text style={styles.addMoreText}>Add More +</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backArrow: {
    fontSize: 22,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "#F8F9FD",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F8F9FD",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  currencyPicker: {
    backgroundColor: "#F8F9FD",
    borderRadius: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  imageUpload: {
    width: 80,
    height: 80,
    backgroundColor: "#F8F9FD",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imageText: {
    fontSize: 24,
  },
  confirmButton: {
    backgroundColor: "#1A4CD7",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  addMoreButton: {
    backgroundColor: "#E5E7EB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  addMoreText: {
    color: "#6B7280",
  },
});

export default NewExpensesScreen;
