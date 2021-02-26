import "react-native-gesture-handler"
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from './app/Route/drawerNavigator';

const App = () => {
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

export default App