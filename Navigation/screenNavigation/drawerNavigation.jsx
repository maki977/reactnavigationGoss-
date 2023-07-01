import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/HomeScreens';
import Details from './Screens/detailsScreens';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;