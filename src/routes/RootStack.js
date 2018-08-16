import { createStackNavigator } from "react-navigation";

import PeopleScreen from "../pages/PeopleScreen";
import PeopleDetailScreen from "../pages/PeopleDetailScreen";
import PeopleDetailNavigationOptions from "./PeopleDetailNavigationOptions";
import NavigationOptions from "./NavigationOptions";

const RootStack = createStackNavigator(
  {
    Main: {
      screen: PeopleScreen
    },
    PeopleDetail: {
      screen: PeopleDetailScreen,
      navigationOptions: PeopleDetailNavigationOptions
    }
  },
  {
    navigationOptions: NavigationOptions
  }
);

export default RootStack;
