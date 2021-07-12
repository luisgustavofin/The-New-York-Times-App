import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Labels, Colors } from '../others';

const SearchButton = ({ onPress }) => (
  <TouchableOpacity testID="searchButton" onPress={onPress} style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 10, marginBottom: 10, width: '68%', height: '7.8%', backgroundColor: Colors.gray333, borderRadius: 18 }}>
    <Text style={{ fontSize: 19.5, color: Colors.white }}>{Labels.search}</Text>
  </TouchableOpacity>
);

export { SearchButton };
