import React, { useContext } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Context } from '../context/RecipeAppContext';
import { MaterialIcons } from '@expo/vector-icons';
import IngredientComponent from '../components/IngredientComponent';

const IngredientsScreen = () => {
  const { state } = useContext(Context);
  const recipe = state.recipe;

  return (
    <View>
      <Image
        source={{ uri: `https:${recipe.image.fields.file.url}` }}
        style={styles.image}
      />
      <Text style={styles.recipeName}>{recipe.name}</Text>

      <FlatList
        data={recipe.ingredients}
        keyExtractor={(item) => Object.keys(item).toString()}
        renderItem={({ item }) => (
          <IngredientComponent ingredient={item} key={Object.keys(item)} />
        )}
      />
    </View>
  );
};

IngredientsScreen.navigationOptions = {
  title: 'Ingredients',
  tabBarIcon: (
    <MaterialIcons name='local-grocery-store' size={24} color='black' />
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
});

export default IngredientsScreen;
