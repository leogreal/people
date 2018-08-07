import React from 'react';
import { Text, View } from 'react-native';

import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      peoples: []
    };
  }

  componentDidMount(){
    axios
      .get('http://randomuser.me/api/?nat=br&results=5')
      .then( response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });
      });
  }
  
  render() {
    return (
      <View>
        <PeopleList peoples={ this.state.peoples } />
      </View>
    );
  }
}
