import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TechnologyScreen, ScienceScreen } from '../screens';
import { Colors } from '../others';

const TabNavigator = createBottomTabNavigator({
  Technology: {
    screen: TechnologyScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Image source={focused ? require('../images/technologyIcon-focused.png') : require('../images/technologyIcon.png')} style={{ width: 30, height: 30 }} />
      ),
    }),
  },
  Science: {
    screen: ScienceScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Image source={focused ? require('../images/scienceIcon-focused.png') : require('../images/scienceIcon.png')} style={{ width: 30, height: 30 }} />
      ),
    }),
  },
},
{
  defaultNavigationOptions: {
    tabBarOptions: {
      activeTintColor: Colors.black,
      inactiveTintColor: Colors.grayTabBar,
    },
  },
});

export default TabNavigator;
