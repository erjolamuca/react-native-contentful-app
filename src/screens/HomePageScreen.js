import React, { useEffect, useContext } from 'react';
import { View, ActivityIndicator, Image, Text, StyleSheet } from 'react-native';
import { Context } from '../context/RecipeAppContext';
import CategoriesComponent from '../components/CategoriesComponent';

const HomePageScreen = ({ navigation }) => {
  const { state, getCategories } = useContext(Context);

  useEffect(() => {
    getCategories();
  }, []);

  if (!state.categories.length)
    return (
      <ActivityIndicator
        size='small'
        color='#00ff00'
        style={styles.activityIndicator}
      />
    );

  return (
    <CategoriesComponent
      categoriesList={state.categories}
      navigation={navigation}
    />
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    justifyContent: 'center',
  },
});

export default HomePageScreen;
