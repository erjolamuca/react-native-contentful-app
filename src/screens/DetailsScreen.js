import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Context } from '../context/RecipeAppContext';
import { Ionicons } from '@expo/vector-icons';

const DetailsScreen = ({ navigation }) => {
  const recipe = navigation.getParam('recipe');

  const { setSingleRecipe } = useContext(Context);

  useEffect(() => {
    setSingleRecipe(recipe);
  }, []);

  return (
    <View>
      <Image
        source={{ uri: `https:${recipe.image.fields.file.url}` }}
        style={styles.image}
      />
      <Text style={styles.recipeName}>{recipe.name}</Text>
      <Text style={styles.text}>Difficulty: {recipe.difficulty}</Text>
      <Text style={styles.text}>Total Time: {recipe.time}</Text>
      <Text style={styles.text}>Course: {recipe.course}</Text>
    </View>
  );
};

DetailsScreen.navigationOptions = {
  title: 'Details',
  tabBarIcon: (
    <Ionicons name='ios-information-circle-outline' size={24} color='black' />
  ),
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  recipeName: {
    fontSize: 25,
    fontWeight: '500',
    alignContent: 'center',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});

export default DetailsScreen;
