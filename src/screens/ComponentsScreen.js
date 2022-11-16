import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  // const greeting = <Text>Hello to you!</Text>;
  const name = 'Rufus';
  // cannot show a JS object inside a JSX element (e.g. Text)

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>
        My name is {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // used rather than inline since errors will cause app to fail to load, rather than just a warning
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
