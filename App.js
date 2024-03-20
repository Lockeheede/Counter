import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  var [counter, setCounter] = useState(0);

  var increaseCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
  }

  var decreaseCounter = () => {
    setCounter(counter - 1);
    console.log(counter);
  }


  return (
    <View style={styles.container}>
      <Button style={styles.button} title="--" onPress={decreaseCounter}/>
      <Text style={styles.counter}>Number: {counter}</Text>
      <Button style={styles.button} title="++" onPress={increaseCounter}/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    color: '#000',
    fontSize: 30,
    backgroundColor: '#CB6100',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 200,
  },
});
