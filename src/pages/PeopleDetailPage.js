import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Line from "../components/Line";

export default class PeopleDetailPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params;

    return (
      <View style={ styles.container }>
        <Image
          source={{ uri: people.picture.large }}
          style={ styles.avatar }
        />
        <View style={ styles.detailContainer }>
          <line label='Email:' content={ people.email } />
          <line label='Cidade:' content={ people.location.city } />
          <line label='Estado:' content={ people.location.state } />
          <line label='Tel:' content={ people.phone } />
          <line label='Cel:' content={ people.cel } />
          <line label='Nac:' content={ people.nat } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  avatar: {
    aspectRatio: 1,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1,
  }
});