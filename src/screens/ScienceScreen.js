import React from 'react';
import { View, FlatList, Linking } from 'react-native';
import axios from 'axios';
import {
  ItemList,
  LoadingModal,
  ErrorModal,
  ListModal,
  InstructionsText,
  StatusBarFunc,
  SearchButton,
  TextInputList
} from '../components';
import { Labels } from '../others';
import { Styles } from '../styles';

export default class ScienceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: '',
      filterList: '',
      instructionsText: true,
      flatlistVisible: false,
      loadingModalVisible: false,
      errorModalVisible: false,
      listModalVisible: false,
      msgError: '',
      listModal: [],
      search: ''
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search && this.state.search === '') {
      this.resetarList();
    }

    if (prevState.search !== this.state.search && this.state.search.length > 0) {
      this.onSubmitEditing();
    }
  }

  onSubmitEditing() {
    if (this.state.search === '') {
      this.setState({ filterList: '' });
    }
    else {
      this.setState({
        filterList:
          this.state.list.filter(
            (item) => item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          )
      });
    }
  }

  async getList() {
    this.setState({ loadingModalVisible: true, instructionsText: false });
    try {
      const response = await axios.get(Labels.apiScience);
      this.setState({
        list: response.data.results,
        loadingModalVisible: false,
        flatlistVisible: true
      });
    }
    catch (error) {
      this.setState({
        loadingModalVisible: false,
        errorModalVisible: true,
        msgError: error.toString()
      });
    }
  }

  getListandListModalVisible(item) {
    this.setState({ listModal: item, listModalVisible: true });
  }

  resetarList() {
    this.setState({ filterList: '' });
  }

  render() {
    return (
      <View style={Styles.container}>

        <SearchButton onPress={() => this.getList()} />

        {this.state.instructionsText
          && <InstructionsText />}

        {this.state.flatlistVisible
          && (
            <View style={Styles.textInputFlatlist}>
              <TextInputList
                onChangeText={(txt) => this.setState({ search: txt })}
                value={this.state.search}
              />
              <FlatList
                data={this.state.filterList ? this.state.filterList : this.state.list}
                renderItem={({ item }) => (
                  <ItemList
                    data={item}
                    onPress={() => this.getListandListModalVisible(item)}
                  />
                )}
                keyExtractor={item => item.url}
              />
            </View>
          )}

        {this.state.loadingModalVisible
          && (
            <LoadingModal
              visible={this.state.loadingModalVisible}
            />
          )}

        {this.state.errorModalVisible
          && (
            <ErrorModal
              visible={this.state.errorModalVisible}
              onPress={() => this.setState({ errorModalVisible: false, instructionsText: true })}
              error={this.state.msgError}
            />
          )}

        {this.state.listModalVisible
          && (
            <ListModal
              openUrl={() => Linking.openURL(this.state.listModal.url)}
              visible={this.state.listModalVisible}
              onPress={() => this.setState({ listModalVisible: false })}
              data={this.state.listModal}
            />
          )}

        <StatusBarFunc />

      </View>
    );
  }
}
