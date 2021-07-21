import React from 'react';
import { View, Text, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Labels, Colors } from '../others';
import { ListModalImage, LoadingModalText, ListModalText } from '.';
import { Styles } from '../styles';

const LoadingModal = ({ visible }) => (
  <Modal animationType="slide" visible={visible} transparent>
    <View style={Styles.containerLoadingModal}>
      <View style={Styles.boxLoadingModal}>
        <LoadingModalText />
        <View style={Styles.boxLoadingModalActivity}>
          <View style={Styles.box2LoadingModalActivity}>
            <ActivityIndicator style={Styles.activityLoadingModal} size="large" color={Colors.black} />
            <Text style={Styles.textLoadingModalActivity}>{Labels.pleaseWait}</Text>
          </View>
        </View>
      </View>
    </View>
  </Modal>
);

const ErrorModal = ({ error, onPress, visible }) => (
  <Modal animationType="slide" visible={visible} transparent>
    <View style={Styles.containerErrorModal}>
      <View style={Styles.boxErrorModal}>
        <View style={Styles.boxButtonErrorModal}>
          <Text style={Styles.textErrorModal}>{Labels.error}</Text>
          <TouchableOpacity onPress={onPress} style={Styles.touchErrorModal}>
            <Text style={Styles.xErrorModal}>{Labels.x}</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.boxTextErrorModal}>
          <Text style={Styles.texterrorErrorModal}>{error}</Text>
        </View>
      </View>
    </View>
  </Modal>
);

const ListModal = ({ onPress, data, visible, openUrl }) => (
  <Modal animationType="slide" visible={visible} transparent>
    <View style={Styles.containerListModal}>
      <View style={Styles.boxListModal}>
        <ListModalImage url={data.multimedia[0].url} />
        <ListModalText text={data.title} flex={2} fontSize={18} fontWeight="bold" />
        <ListModalText text={data.abstract ? data.abstract : '(no abstract)'} flex={2} fontSize={15} />
        <TouchableOpacity style={Styles.touchUrlListModal} onPress={openUrl}>
          <ListModalText text={data.url} flex={1} fontSize={10} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={Styles.touchListModal}>
          <Text style={Styles.xListModal}>{Labels.x}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export { LoadingModal, ErrorModal, ListModal };
