import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Labels } from '../others';
import { Styles } from '../styles';

const SearchButton = ({ onPress }) => (
  <TouchableOpacity testID="searchButton" onPress={onPress} style={Styles.touchSearchButton}>
    <Text style={Styles.textSearchButton}>{Labels.search}</Text>
  </TouchableOpacity>
);

export { SearchButton };
