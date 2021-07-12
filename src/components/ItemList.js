import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../others';
import { ItemListImage } from '.';

const ItemList = ({ data, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ marginTop: 15, alignItems: 'center' }}>
    <View style={{ width: '98%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 7, backgroundColor: Colors.white, flexDirection: 'row' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <ItemListImage url={data.multimedia[0].url} />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{data.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export { ItemList };
