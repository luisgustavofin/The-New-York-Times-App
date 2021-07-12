import React from 'react';
import { View, Text, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Labels, Colors } from '../others';
import { ListModalImage } from '.';

const LoadingModal = ({ visible }) => (
  <Modal animationType="slide" visible={visible} transparent>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <View style={{ width: '80%', height: '20%', alignItems: 'center', borderRadius: 3, backgroundColor: Colors.white, flexDirection: 'column' }}>
        <View style={{ flex: 1, width: '100%' }}>
          <Text style={{ fontSize: 23, margin: 14 }}>{Labels.loading}</Text>
        </View>
        <View style={{ flex: 1, width: '100%' }}>
          <View style={{ flexDirection: 'row' }}>
            <ActivityIndicator style={{ flex: 1 }} size="large" color={Colors.black} />
            <Text style={{ marginTop: 4, marginLeft: -13, color: Colors.black, fontSize: 17, flex: 2 }}>{Labels.pleaseWait}</Text>
          </View>
        </View>
      </View>
    </View>
  </Modal>
);

const ErrorModal = ({ error, onPress, visible }) => (
  <Modal animationType="slide" visible={visible} transparent>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <View style={{ width: '80%', height: '20%', alignItems: 'center', borderRadius: 3, backgroundColor: Colors.white, flexDirection: 'column' }}>
        <View style={{ flex: 1, width: '100%' }}>
          <Text style={{ fontSize: 23, margin: 3, color: Colors.red }}>{Labels.error}</Text>
          <TouchableOpacity onPress={onPress} style={{ position: 'absolute', top: 2, right: 3 }}>
            <Text style={{ fontSize: 19, color: Colors.red }}>{Labels.x}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: Colors.black, fontSize: 15 }}>{error}</Text>
        </View>
      </View>
    </View>
  </Modal>
);

const ListModal = ({ onPress, data, visible }) => (

  <Modal animationType="slide" visible={visible} transparent>
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <View style={{ width: '90%', height: 350, justifyContent: 'center', alignItems: 'center', borderRadius: 7, backgroundColor: Colors.white, flexDirection: 'column' }}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
        <ListModalImage url={data.multimedia[0].url} />
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{data.title}</Text>
        </View>

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, textAlign: 'center' }}>{data.abstract}</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 10, textAlign: 'center' }}>{data.url}</Text>
        </View>

        <TouchableOpacity onPress={onPress} style={{ position: 'absolute', top: 1, right: 4 }}>
          <Text style={{ color: Colors.black, fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>{Labels.x}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export { LoadingModal, ErrorModal, ListModal };
