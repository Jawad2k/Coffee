import React from 'react';
import { StyleSheet, FlatList, View, Text } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from '../components/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const listings = [
  {
    id: 1,
    title: "Coffee Place 1",
    subTitle: "5 star",
    image: require("../assets/Coffee1.jpeg"),
  },
  {
    id: 2,
    title: "Coffee Place 2",
    subTitle: "1 star",
    image: require("../assets/Coffee2.jpg"),
  },
  {
    id: 3,
    title: "Coffee Place 3",
    subTitle: "4 star",
    image: require("../assets/Coffee3.jpg"),
  },
];

function HomeScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
  },
});

export default HomeScreen;

