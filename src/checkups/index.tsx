import { createStackNavigator } from "react-navigation-stack";
import HowYaDoinScreen from "./HowYaDoinScreen";
import CheckupToThoughtScreen from "./CheckupToThoughtScreen";

export default createStackNavigator(
  {
    'HOW_YA_DOIN_SCREEN': HowYaDoinScreen,
    'CHECKUP_REDIRECT_SCREEN': CheckupToThoughtScreen,
  },
  {
    initialRouteName: 'HOW_YA_DOIN_SCREEN',
  }
);
