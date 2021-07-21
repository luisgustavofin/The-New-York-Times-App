import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { Styles } from '../styles';

const TextInputList = ({ onChangeText, value }) => (
  <View style={Styles.boxTextInput}>
    <View style={Styles.inputWrapper}>
      <Image
        source={require('../images/lupa-icon.png')}
        style={Styles.lupaTestListComponent}
      />
      <TextInput
        style={Styles.searchInput}
        autoCompleteType="off"
        placeholder="Filter a news"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="done"
        placeholderTextColor="#ffffff"
        clearButtonMode="while-editing"
        keyboardAppearance="default"
        numberOfLines={1}
        autoCorrect={false}
        maxLength={30}
      />
    </View>
  </View>
);

export { TextInputList };
