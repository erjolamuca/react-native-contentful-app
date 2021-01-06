import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const IngredientComponent = ({ ingredient }) => {
  let ingredients = [];
  for (let key in ingredient) {
    ingredients.push(ingredient[key]);
  }

  return (
    <View>
      {ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.text}>
          <AntDesign name='check' size={18} color='#5D5455' />
          {ingredient}{' '}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default IngredientComponent;
