import { StyleSheet } from 'react-native';
import { Colors } from '../others';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGroundColor
  },
  touchSearchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '68%',
    height: '7.8%',
    backgroundColor: Colors.gray333,
    borderRadius: 18
  },
  textSearchButton: {
    fontSize: 19.5,
    color: Colors.white
  },
  itemListImage: {
    width: 80,
    height: 80
  },
  listModalImage: {
    width: 100,
    height: 100
  },
  containerInstructionsText: {
    flex: 1,
    marginLeft: 10,
    marginTop: 5
  },
  textInstructionsText: {
    fontSize: 19,
    color: Colors.gray333
  },
  touchItemList: {
    marginTop: 15
  },
  boxItemList: {
    width: '98%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: Colors.white,
    flexDirection: 'row'
  },
  area1ItemList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  area2ItemList: {
    flex: 2
  },
  textItemList: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerLoadingModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackOpacity
  },
  boxLoadingModal: {
    width: '80%',
    height: '20%',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: Colors.white,
    flexDirection: 'column'
  },
  containerLoadingModalText: {
    flex: 1,
    width: '100%'
  },
  textLoadingModalText: {
    fontSize: 23,
    margin: 14
  },
  boxLoadingModalActivity: {
    flex: 1,
    width: '100%'
  },
  box2LoadingModalActivity: {
    flexDirection: 'row'
  },
  activityLoadingModal: {
    flex: 1
  },
  textLoadingModalActivity: {
    flex: 2,
    marginTop: 4,
    marginRight: 11,
    color: Colors.black,
    fontSize: 17
  },
  containerErrorModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackOpacity
  },
  boxErrorModal: {
    width: '80%',
    height: '20%',
    borderRadius: 3,
    backgroundColor: Colors.white,
    flexDirection: 'column'
  },
  boxButtonErrorModal: {
    flex: 1,
    width: '100%'
  },
  textErrorModal: {
    fontSize: 23,
    margin: 3,
    color: Colors.red
  },
  touchErrorModal: {
    position: 'absolute',
    top: 2,
    right: 3
  },
  xErrorModal: {
    fontSize: 19,
    color: Colors.red
  },
  boxTextErrorModal: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texterrorErrorModal: {
    color: Colors.black,
    fontSize: 15
  },
  containerListModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackOpacity
  },
  boxListModal: {
    width: '90%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: Colors.white,
    flexDirection: 'column'
  },
  boxImageListModal: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3
  },
  touchListModal: {
    position: 'absolute',
    top: 1,
    right: 4
  },
  xListModal: {
    color: Colors.black,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  genericboxListModal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  generictextListModal: {
    textAlign: 'center'
  }
});

export { Styles };
