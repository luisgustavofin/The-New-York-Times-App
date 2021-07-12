import React from 'react';
import { View, Text } from 'react-native';
import { Labels, Colors } from '../others';

const InstructionsText = () => (
  <View style={{ flex: 1, marginLeft: 10, marginTop: 5 }}>
    <Text style={{ fontSize: 19, color: Colors.gray333 }}>{Labels.instructionsText}</Text>
  </View>
);

export { InstructionsText };
