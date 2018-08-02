import React from 'react';
import { Text, View } from 'react-native';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';

import axios from 'axios'

export default class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      peoples: []
    };
  }

  componentDidMount(){
    axios
      .get('http://randomuser.me/api/?nat=bt&results=5')
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
        <Header title="People"/>
        <PeopleList peoples={ this.state.peoples } />
      </View>
    );
  }
}
