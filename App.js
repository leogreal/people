import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';

export default createStackNavigator ({
  Main: {
    screen: PeoplePage
  }
}, {
  navigationOptions: {
    title: 'People!',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      flex: 1,
    }
  }
});
