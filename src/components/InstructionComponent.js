import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InstructionComponent = ({ instruction }) => {
  let instructions = [];
  for (let key in instruction) {
    instructions.push(instruction[key]);
  }

  return (
    <View>
      {instructions.map((instruction, index) => (
        <Text key={index} style={styles.text}>
          {index + 1} - {instruction}{' '}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    fontStyle: 'italic',
    marginLeft: 10,
  },
});

export default InstructionComponent;
