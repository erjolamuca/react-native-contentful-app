import React, { useContext } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Context } from '../context/RecipeAppContext';
import { FontAwesome5 } from '@expo/vector-icons';
import InstructionComponent from '../components/InstructionComponent';

const InstructionsScreen = () => {
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
        data={recipe.instructions}
        keyExtractor={(item) => Object.keys(item).toString()}
        renderItem={({ item }) => (
          <InstructionComponent instruction={item} key={Object.keys(item)} />
        )}
      />
    </View>
  );
};

InstructionsScreen.navigationOptions = {
  title: 'Instructions',
  tabBarIcon: <FontAwesome5 name='utensils' size={24} color='black' />,
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

export default InstructionsScreen;
