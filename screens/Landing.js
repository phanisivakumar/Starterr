import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export const Landing = ({ navigation }) => {
  return (
    <View>
      <Text>Landing Page!</Text>
      <Button
        title="Go to Welcome"
        onPress={() => navigation.navigate("routeWelcome")}
      />
      <Button
        title="Sign In"
        onPress={() => navigation.navigate("routeSignIn")}
      />
    </View>
  );
};
