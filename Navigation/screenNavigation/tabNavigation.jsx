import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/HomeScreens';
import Details from './Screens/detailsScreens';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
  );
}
export default MyTabs ;