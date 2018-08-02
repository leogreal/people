import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { StringUtils } from '../util'

const PeopleListItems = props => {
    const { people } = props;
    const { title, first, last } = people.name;

    return(
        <View style={style.line}>
            <Text style={style.lineText}>
                { StringUtils.title(`${title} ${first} ${last}`) }
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        
        alignItems: 'center',
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
    }
});

export default PeopleListItems;