import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// touchable opacity: fades out when clicked
// button: pre-styled text via title, limited customization potential

// destructure props so only needed navigation object is passed into function
const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Got to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Got to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Got to Color Demo"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
