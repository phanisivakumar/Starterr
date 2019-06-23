import { createStackNavigator } from "react-navigation";
import { Landing } from "../screens/Landing";
import { SignIn } from "../screens/SignIn";
import { CreateAccount } from "../screens/CreateAccount";
import { ForgotPassword } from "../screens/ForgotPassword";
import { ResetPassword } from "../screens/ResetPassword";

export const AuthStack = createStackNavigator({
  routeLanding: {
    screen: Landing,
    navigationOptions: {
      headerTitle: "Landing"
    }
  },
  routeSignIn: {
    screen: SignIn,
    navigationOptions: {
      headerTitle: "Sign In"
    }
  },
  routeCreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  routeForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerTitle: "Forgot Password"
    }
  },
  routeResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      headerTitle: "Reset Password"
    }
  }
});
