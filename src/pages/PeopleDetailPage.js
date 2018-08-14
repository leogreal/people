import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import Line from "../components/Line";
import { StringUtils } from "../util";

export default class PeopleDetailPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: people.picture.large }} style={styles.avatar} />
          <View style={styles.detailContainer}>
            <Line label="Email:" content={people.email} />
            <Line
              label="Cidade:"
              content={StringUtils.title(people.location.city)}
            />
            <Line
              label="Estado:"
              content={StringUtils.title(people.location.state)}
            />
            <Line label="Tel:" content={people.phone} />
            <Line label="Cel:" content={people.cel} />
            <Line label="Nac:" content={people.nat} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  avatar: {
    aspectRatio: 1
  },
  detailContainer: {
    backgroundColor: "#e2f9ff",
    marginTop: 20,
    elevation: 1
  }
});
