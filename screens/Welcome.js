import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export const Welcome = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome!</Text>
      <Button
        title="Go to Auth"
        onPress={() => navigation.navigate("routeAuth")}
      />
    </View>
  );
};
