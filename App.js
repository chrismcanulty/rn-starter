import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";

const navigator = createStackNavigator(
  // stack navigator: object decides what content appears on the screen at given point of time
  // it is a tool from a React library called 'React Navigation' used to show different screens to user
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
