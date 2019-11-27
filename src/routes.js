import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cards from './pages/Cards';
import Intro from './pages/Intro';
import Specialty from './pages/Specialty';
import Opportunities from './pages/Opportunities';

export default createAppContainer(
  createSwitchNavigator({
    Home,
    Intro,
    Cards,
    Specialty,
    Opportunities,
  })
);
