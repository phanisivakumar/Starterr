import React from "react";
import { View, Text, Button } from "react-native";

export const ForgotPassword = ({ navigation }) => {
  return (
    <View>
      <Text>Forgot Password Page!</Text>
      <Button
        title="Go to Nav Screen"
        onPress={() => navigation.navigate("routeNavigation")}
      />
    </View>
  );
};
