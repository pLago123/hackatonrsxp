import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cards from './pages/Cards';
import Intro from './pages/Intro';

export default createAppContainer(
  createSwitchNavigator({
    Home,
    Intro,
    Cards,
  })
);
