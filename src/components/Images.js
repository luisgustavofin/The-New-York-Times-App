import React from 'react';
import { Image } from 'react-native';

const ItemListImage = ({ url }) => (
  <Image
    style={{ width: 80, height: 80 }}
    source={{
      uri: url,
    }}
    defaultSource={require('../images/loading-image.png')}
  />
);

const ListModalImage = ({ url }) => (
  <Image
    style={{ width: 100, height: 100 }}
    source={{
      uri: url,
    }}
  />
);

export { ItemListImage, ListModalImage };
