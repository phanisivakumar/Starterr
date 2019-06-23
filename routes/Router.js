import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Welcome } from "../screens/Welcome";
import { AuthStack } from "./Auth";

const AppNavigator = createSwitchNavigator({
  routeWelcome: {
    screen: Welcome
  },
  routeAuth: {
    screen: AuthStack
  }
});

export const AppContainer = createAppContainer(AppNavigator);
