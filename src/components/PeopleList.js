import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PeopleListItems from './PeopleListItems'

const PeopleList = props => {
    const { peoples } = props;

    const items = peoples.map(people =>
        <PeopleListItems 
            key={ people.name.first } 
            people={ people } />
    );

    return(
        <View style={style.container}>
            { items }
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;