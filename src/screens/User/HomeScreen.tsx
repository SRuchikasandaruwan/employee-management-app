import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '..//..//components/Slider';
import Slider from '..//..//components/Slider';
import CircularButton from '..//..//components/CircularButton';
import ActionButtons from '..//..//components/ActionButtons';
import ProfileStatusView from '..//..//components/ProfileStatus';
import AppStatusBar from '../../components/StatusBar';
import TimeComponent from '../../components/TimeComponent';
<<<<<<< Updated upstream
=======
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


>>>>>>> Stashed changes

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppStatusBar/>
      {/* <Header style={styles.header} /> */}
      <ProfileStatusView/>
      <Slider />
      <TimeComponent/>
      <CircularButton />
      <ActionButtons />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    marginBottom: 50,
    paddingBottom: 90,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 50,
    padding:20,
  }
});

export default HomeScreen;
