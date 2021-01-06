import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipesListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: `https:${item.image.fields.file.url}` }}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>
            <Text>{item.difficulty}</Text> -
            <Text style={styles.time}>{item.time}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.course}>Course: </Text>
            {item.course}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 10,
  },
  content: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.6,
    marginTop: 5,
    marginBottom: 10,
  },
  time: {
    fontStyle: 'italic',
    fontSize: 14,
  },
  course: {
    fontWeight: '400',
  },
  text: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
  },
});

export default RecipesListItem;
