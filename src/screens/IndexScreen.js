import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { client } from '../contentfulClient/contentfulClient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../context/RecipeAppContext';
import RecipesListItem from '../components/RecipesListItem';

const IndexScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('id');

  const { state, getRecipes } = useContext(Context);

  useEffect(() => {
    getRecipes(categoryId);
  }, []);

  if (!state.recipes.length) return <Text>Loading...</Text>;

  return (
    <View>
      <FlatList
        data={state.recipes}
        keyExtractor={(item) => item.fields.id.toString()}
        renderItem={({ item }) => (
          <RecipesListItem
            item={item.fields}
            onPress={() =>
              navigation.navigate('DetailsScreen', { recipe: item.fields })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
