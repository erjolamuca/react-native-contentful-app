import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomePageScreen from './src/screens/HomePageScreen';
import IndexScreen from './src/screens/IndexScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import IngredientsScreen from './src/screens/IngredientsScreen';
import InstructionsScreen from './src/screens/InstructionsScreen';
import { Provider } from './src/context/RecipeAppContext';

const navigator = createStackNavigator({
  HomePageScreen: HomePageScreen,
  IndexScreen: IndexScreen,
  detailFlow: createBottomTabNavigator({
    DetailsScreen: DetailsScreen,
    IngredientsScreen: IngredientsScreen,
    InstructionsScreen: InstructionsScreen,
  }),
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
