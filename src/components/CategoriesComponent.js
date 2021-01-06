import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CategoryDetail from './CategoryDetail';

const CategoriesComponent = ({ categoriesList, navigation }) => {
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={styles.container}>
            <Image
              source={{
                uri:
                  'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              }}
              style={styles.image}
            />
            <Text style={styles.title}>Learn By Doing...</Text>
          </View>
        </>
      }
      data={categoriesList}
      keyExtractor={(category, index) => index.toString()}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('IndexScreen', {
                id: item.sys.id,
              })
            }
          >
            <CategoryDetail result={item.fields} key={item.fields.id} />
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    backgroundColor: '#000',
    opacity: 0.3,
    color: '#fff',
    position: 'absolute',
    width: '100%',
    height: '100%',
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '600',
    paddingTop: 260,
  },
});
export default CategoriesComponent;
