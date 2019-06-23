import React from "react";
import { View, Text, Button } from "react-native";

export const ResetPassword = ({ navigation }) => {
  return (
    <View>
      <Text>Reset Password Page!</Text>
      <Button
        title="Go to Nav Screen"
        onPress={() => navigation.navigate("routeNavigation")}
      />
    </View>
  );
};
