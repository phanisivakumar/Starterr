import React from "react";
import { View, Text, Button } from "react-native";

export const CreateAccount = ({ navigation }) => {
  return (
    <View>
      <Text>Create Account Page!</Text>
      <Button
        title="Go to Nav Screen"
        onPress={() => navigation.navigate("routeNavigation")}
      />
    </View>
  );
};
