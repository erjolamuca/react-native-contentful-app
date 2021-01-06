import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https:${result.image.fields.file.url}` }}
        style={styles.image}
      />
      <Text style={styles.categoryName}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  container: {
    marginBottom: 15,
  },
  categoryName: {
    backgroundColor: '#000',
    opacity: 0.7,
    color: '#fff',
    position: 'absolute',
    padding: 15,
    fontSize: 16,
    alignContent: 'center',
    width: '100%',
    bottom: 0,
  },
});

export default CategoryDetail;
