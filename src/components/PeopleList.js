import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PeopleListItems from './PeopleListItems'

const PeopleList = props => {
    const { peoples, onPressItem } = props;

    return(
        <FlatList
            style={styles.container}
            data={ peoples }
            renderItem={ ({ item }) => (
                <PeopleListItems 
                    people={ item }
                    navigateToPeopleDetail={ onPressItem }
                />
            ) }
            keyExtractor={ item => item.name.first }
        />
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;