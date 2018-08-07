import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PeopleListItems from './PeopleListItems'

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    const items = peoples.map(people =>
        <PeopleListItems 
            key={ people.name.first } 
            people={ people }
            navigateToPeopleDetail={ onPressItem } />
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