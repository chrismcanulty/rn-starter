import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// TextInput: by default has zero styling other than a height value
// First character automatically capitalized on iOS, Android may or may not depending on version
// iOS also has auto-correct by default

const TextScreen = () => {
  const [password, setPassword] = useState("")

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => {
          setPassword(newValue)
        }}
      />
      {password.length < 6 ? <Text>Password must be at least 6 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
