import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TechnologyScreen, ScienceScreen } from '../screens';
import { Colors } from '../others';
import { Styles } from '../styles';

const TabNavigator = createBottomTabNavigator({
  Technology: {
    screen: TechnologyScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? require('../images/technologyIcon-focused.png') : require('../images/technologyIcon.png')}
          style={Styles.imageTabNavigator}
        />
      ),
    }),
  },
  Science: {
    screen: ScienceScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? require('../images/scienceIcon-focused.png') : require('../images/scienceIcon.png')}
          style={Styles.imageTabNavigator}
        />
      ),
    }),
  },
},
{
  defaultNavigationOptions: {
    tabBarOptions: {
      activeTintColor: Colors.black
    }
  }
});

export default TabNavigator;
