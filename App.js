import { createStackNavigator } from "react-navigation";

import PeopleScreen from "./src/pages/PeopleScreen";
import PeopleDetailScreen from "./src/pages/PeopleDetailScreen";

import { StringUtils } from "./src/util";

export default createStackNavigator(
  {
    Main: {
      screen: PeopleScreen
    },
    PeopleDetail: {
      screen: PeopleDetailScreen,
      navigationOptions: ({ navigation }) => {
        const peopleName = StringUtils.title(
          navigation.state.params.people.name.first
        );
        return {
          title: peopleName,
          headerTitleStyle: {
            color: "white",
            fontSize: 30
          }
        };
      }
    }
  },
  {
    navigationOptions: {
      title: "People!",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#6ca2f7",
        borderBottomWidth: 1,
        borderBottomColor: "#C5C5C5"
      },
      headerTitleStyle: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        flex: 1
      }
    }
  }
);
