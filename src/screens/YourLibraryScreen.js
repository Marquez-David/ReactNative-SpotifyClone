import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';

const SearchScreen = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>
        {'Your Library'}
      </Text>
    </View>
  );
};

export default SearchScreen;