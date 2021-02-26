import React, { Component } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import { ListItem } from "../components/lists";
import colors from '../components/colors';
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "My Reviews",
  },
  {
    title: "My Messages",
  },
];

function ProfileScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Jawad"
          subTitle="email"
          image={require("../assets/Logo.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
            />
          )}
        />
      </View>
      <Button title="Logout" onPress={() => { this.Logout() }} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
  },
  container: {
    marginVertical: 20,
  },
  Button: {
    backgroundColor: colors.secondary,
  },
});

export default ProfileScreen;