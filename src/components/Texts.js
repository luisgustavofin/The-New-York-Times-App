import React from 'react';
import { View, Text } from 'react-native';
import { Labels } from '../others';
import { Styles } from '../styles';

const InstructionsText = () => (
  <View style={Styles.containerInstructionsText}>
    <Text style={Styles.textInstructionsText}>{Labels.instructionsText}</Text>
  </View>
);

const LoadingModalText = () => (
  <View style={Styles.containerLoadingModalText}>
    <Text style={Styles.textLoadingModalText}>{Labels.loading}</Text>
  </View>
);

const ListModalText = ({ text, flex, fontSize, fontWeight }) => (
  <View style={[Styles.genericboxListModal, { flex }]}>
    <Text style={[Styles.generictextListModal, { fontSize, fontWeight }]}>{text}</Text>
  </View>
);

export { InstructionsText, LoadingModalText, ListModalText };
