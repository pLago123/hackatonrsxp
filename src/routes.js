import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cards from './pages/Cards';

export default createAppContainer(
  createSwitchNavigator({
    Home,
    Cards,
  })
);
