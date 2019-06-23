import React from "react";
import { View, Text, Button } from "react-native";

export const SignIn = ({ navigation }) => {
  return (
    <View>
      <Text>Sign In Page!</Text>
      <Button
        title="Go to Nav Screen"
        onPress={() => navigation.navigate("routeNavigation")}
      />
    </View>
  );
};
