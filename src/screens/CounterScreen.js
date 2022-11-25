import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  // state === { counter: number }
  // action === { type: 'change_counter', payload: 1 || -1 }
  // action: how to change state

  switch (action.type) {
    case 'change_counter':
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }

};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  // initial value of state object is { counter: 0 }
  const { counter } = state;

  return <View>
    <Button
      title="Increase"
      onPress={() => dispatch({ type: 'change_counter', payload: COUNTER_INCREMENT })}
    />
    <Button
      title="Decrease"
      onPress={() => dispatch({ type: 'change_counter', payload: -1 * COUNTER_INCREMENT })}
    />
    <Text>Current Count: {counter} </Text>
  </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;
