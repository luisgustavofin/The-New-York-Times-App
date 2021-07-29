import React from 'react';
import { View, Image } from 'react-native';
import { Styles } from '../styles';

const ItemListImage = ({ url }) => (
  <View style={Styles.area1ItemList}>
    <Image
      style={Styles.itemListImage}
      source={{
        uri: url
      }}
      defaultSource={require('../images/loading-image.png')}
    />
  </View>
);

const ListModalImage = ({ url }) => (
  <View style={Styles.boxImageListModal}>
    <Image
      style={Styles.listModalImage}
      source={{
        uri: url
      }}
    />
  </View>
);

export { ItemListImage, ListModalImage };
