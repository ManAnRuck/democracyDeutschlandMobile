import {
  callOnce,
  clearCacheFor,
    makeHot,
  redraw,
} from 'haul/hot';
import 'haul/hot/patch';
import { Navigation } from "react-native-navigation";

import App from "./App";

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', makeHot(() => App, 'example.FirstTabScreen'));
}
if (module.hot) {
     module.hot.accept('./App.tsx', () => {
       clearCacheFor(require.resolve('./App.tsx'));
       redraw(() => require('./App.tsx').default, 'example.FirstTabScreen');
     });
   }