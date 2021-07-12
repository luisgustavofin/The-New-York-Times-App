import React from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import { ItemList, LoadingModal, ErrorModal, ListModal, InstructionsText, StatusBarFunc, SearchButton } from '../components';
import { Labels, Colors } from '../others';

export default class ScienceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      instructionsText: true,
      flatlistVisible: false,
      loadingModalVisible: false,
      errorModalVisible: false,
      listModalVisible: false,
      msgError: '',
      listModal: [],
    };
  }

  async getList() {
    this.setState({ loadingModalVisible: true, instructionsText: false });
    try {
      const response = await axios.get(Labels.apiScience);
      this.setState({ list: response.data.results, loadingModalVisible: false, flatlistVisible: true });
    }
    catch (error) {
      this.setState({ loadingModalVisible: false, errorModalVisible: true, msgError: error.toString() });
    }
  }

  getListandListModalVisible(item) {
    this.setState({ listModal: item, listModalVisible: true });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.backGroundColor }}>

        <StatusBarFunc />

        <SearchButton onPress={() => this.getList()} />

        {this.state.instructionsText
          && <InstructionsText />}

        {this.state.flatlistVisible
          && (
            <FlatList
              data={this.state.list}
              renderItem={({ item }) => <ItemList data={item} onPress={() => this.getListandListModalVisible(item)} />}
              keyExtractor={item => item.url}
            />
          )}

        {this.state.loadingModalVisible
          && <LoadingModal visible={this.state.loadingModalVisible} />}

        {this.state.errorModalVisible
          && <ErrorModal visible={this.state.errorModalVisible} onPress={() => this.setState({ errorModalVisible: false, instructionsText: true })} error={this.state.msgError} />}

        {this.state.listModalVisible
          && <ListModal visible={this.state.listModalVisible} onPress={() => this.setState({ listModalVisible: false })} data={this.state.listModal} />}

      </View>
    );
  }
}
