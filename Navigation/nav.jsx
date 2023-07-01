import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import stack from './screenNavigation/stackNavigation';
import MyTabs from './screenNavigation/tabNavigation';
import MyDrawer from './screenNavigation/drawerNavigation';

const Navigations =() => {
    return (
      <NavigationContainer>
        <stack/>
      </NavigationContainer>
    );
  }
  export default Navigations;