import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ItemListImage } from '.';
import { Styles } from '../styles';

const ItemList = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress} style={Styles.touchItemList}>
    <View style={Styles.boxItemList}>
      <ItemListImage url={data.multimedia[0].url} />
      <View style={Styles.area2ItemList}>
        <Text style={Styles.textItemList}>{data.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export { ItemList };
