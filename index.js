import { Navigation } from "react-native-navigation";

import { registerScreens } from "./src/screens";

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: "example.FirstTabScreen", // unique ID registered with Navigation.registerScreen
    title: "App" // title of the screen as appears in the nav bar (optional)
  }
});
