import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

const images = [
  require('../assets/Poster1.jpg'),
  require('../assets/Poster2.jpg'),
  require('../assets/Poster3.jpg'),
];

const Slider: React.FC = () => {
  return (
    <FlatList
      data={images}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Image source={ item } style={styles.image} />
      )}
      style={styles.slider}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default Slider;
