import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator, HomeStackNavigator, ReviewStackNavigator } from './stackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Reviews" component={ReviewStackNavigator} />
      <Drawer.Screen name="Profile" component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;