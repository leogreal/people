import { createStackNavigator } from "react-navigation";

import PeopleScreen from "../people/PeopleScreen";
import PeopleDetailScreen from "../peopledetail/PeopleDetailScreen";
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
