import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/User/HomeScreen';
import RequestsScreen from './src/screens/User/RequestsScreen';
import LeavesScreen from './src/screens/User/LeavesScreen';
import AttendanceScreen from './src/screens/User/AttendanceScreen';
import PaySlipsScreen from './src/screens/User/PaySlipsScreen';
import ProjectTaskScreen from './src/screens/User/ProjectTaskScreen';
import TeamScreen from './src/screens/User/TeamScreen';
import NewLeaveRequestScreen from './src/screens/User/NewLeaveRequestScreen';
import { PaperProvider } from 'react-native-paper';
import TabNavigator from './src/navigation/TabNavigator';
import WelcomeScreen from './src/screens/WelcomeScreen';
import WelcomeScreen02 from './src/screens/WelcomeScreen02';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
<<<<<<< Updated upstream
=======
import NewExpensesScreen from './src/screens/User/NewExpensesScreen';
import RequestsApplication from './src/screens/HR/RequestsApplication';
import LeaveDetailsScreen from './src/screens/HR/LeaveDetailsScreen';
import HRAttendanceScreen from './src/screens/HR/HRAttendance Screen';
import TaskManagementScreen from './src/screens/HR/TaskManagementScreen';
import ChatScreen from './src/screens/User/ChatScreen';
>>>>>>> Stashed changes

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="WelcomeScreen02" component={WelcomeScreen02} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Requests" component={RequestsScreen} />
        <Stack.Screen name="Leaves" component={LeavesScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="PaySlips" component={PaySlipsScreen} />
        <Stack.Screen name="ProjectTask" component={ProjectTaskScreen} />
        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="NewLeaveRequestScreen" component={NewLeaveRequestScreen} />
<<<<<<< Updated upstream
=======
        <Stack.Screen name="NewExpensesScreen" component={NewExpensesScreen} />
        <Stack.Screen name="RequestsApplication" component={RequestsApplication} />
        <Stack.Screen name="LeaveDetailsScreen" component={LeaveDetailsScreen} />
        <Stack.Screen name="HRAttendanceScreen" component={HRAttendanceScreen} />
        <Stack.Screen name="TaskManagementScreen" component={TaskManagementScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
