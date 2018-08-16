import { StringUtils } from "../util";

const PeopleDetailNavigationOptions = ({ navigation }) => {
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
};

export default PeopleDetailNavigationOptions;
