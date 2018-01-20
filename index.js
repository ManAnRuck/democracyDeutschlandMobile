import { Navigation } from "react-native-navigation";

import { registerScreens } from "./src/screens";

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: "App",
      screen: "example.FirstTabScreen", // this is a registered name for a screen
      title: "Screen One"
    }
  ]
});
