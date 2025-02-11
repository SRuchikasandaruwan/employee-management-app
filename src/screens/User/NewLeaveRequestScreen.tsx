import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Menu, IconButton } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/colors';

const NewLeaveRequestScreen = () => {
  const [leaveType, setLeaveType] = useState('Annual');
  const [reason, setReason] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [showLeaveTypeMenu, setShowLeaveTypeMenu] = useState(false);

  const onStartDateChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const onEndDateChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  const leaveTypes = ['Annual', 'Sick', 'Casual'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>New Leave Request</Text>
      <View style={styles.headercontainer}>

      {/* Leave Type Dropdown */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Leave type</Text>
        <Menu
          visible={showLeaveTypeMenu}
          onDismiss={() => setShowLeaveTypeMenu(false)}
          anchor={
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => setShowLeaveTypeMenu(true)}
            >
              <Text style={styles.dropdownButtonText}>{leaveType}</Text>
              <Icon name="chevron-down" size={20} color="#333" />
            </TouchableOpacity>
          }
        >
          {leaveTypes.map((type, index) => (
            <Menu.Item
              key={index}
              onPress={() => {
                setLeaveType(type);
                setShowLeaveTypeMenu(false);
              }}
              title={type}
            />
          ))}
        </Menu>
      </View>

      {/* Reason Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Reason</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={reason}
          onChangeText={setReason}
          placeholder="Enter reason"
          multiline
        />
      </View>

      {/* Start Date Input with Calendar Icon */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Start Date</Text>
        <TouchableOpacity
          style={styles.dateInputContainer}
          onPress={() => setShowStartDatePicker(true)}
        >
          <Text style={styles.dateInputText}>{startDate.toLocaleDateString()}</Text>
          <Icon name="calendar" size={24} color={Colors.primary} />
        </TouchableOpacity>
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={onStartDateChange}
          />
        )}
      </View>

      {/* End Date Input with Calendar Icon */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>End Date</Text>
        <TouchableOpacity
          style={styles.dateInputContainer}
          onPress={() => setShowEndDatePicker(true)}
        >
          <Text style={styles.dateInputText}>{endDate.toLocaleDateString()}</Text>
          <Icon name="calendar" size={24} color={Colors.primary} />
        </TouchableOpacity>
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onEndDateChange}
          />
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Send Request</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: 56,
    paddingTop: 130,
    backgroundColor: Colors.primary,
  },
  header: {
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    // backgroundColor: Colors.primary,
  },
  headercontainer:{
    backgroundColor: 'white',
    padding: 50,
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64,
  },

  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#F4F5F7',
    // borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 12,
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F4F5F7',
    // borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 12,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F4F5F7',
    // borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 12,
  },
  dateInputText: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    borderRadius: 25,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewLeaveRequestScreen;