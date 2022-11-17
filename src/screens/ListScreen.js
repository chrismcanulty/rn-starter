import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  // keys are needed to relate data to specific element in react native
  // key must be a unique string
  // method 1: key exists within array of data itself, 'ahead of time'

  // const friends = [
  //   { name: 'Friend #1', key: '1' },
  //   { name: 'Friend #2', key: '2' },
  //   { name: 'Friend #3', key: '3' },
  //   { name: 'Friend #4', key: '4' },
  //   { name: 'Friend #5', key: '5' },
  //   { name: 'Friend #6', key: '6' },
  //   { name: 'Friend #7', key: '7' },
  //   { name: 'Friend #8', key: '8' },
  //   { name: 'Friend #9', key: '9' },
  // ];

  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 27 },
    { name: 'Friend #5', age: 53 },
    { name: 'Friend #6', age: 30 },
    { name: 'Friend #7', age: 89 },
    { name: 'Friend #8', age: 25 },
    { name: 'Friend #9', age: 75 },
  ];

  return (
    // method 2: add key within FlatList element itself, at run time
    // FlatList: scrollable on iOS, not Android
    <FlatList
      // horizontal
      // same as horizontal={true}

      // showsHorizontalScrollIndicator={false}
      // hide horizontal scroll bar
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        );
      }}
    // element === { item: {name: 'Friend #1' }, index: 0 }
    // item === { name: 'Friend #1' }
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
