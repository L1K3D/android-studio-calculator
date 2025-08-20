// Importing components from Expo and React Native
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  // State variables to store the input values and the result
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  // Function to calculate the sum of two numbers
  function sum() {
    if (value1 == '' || value2 == '') {   // Check if inputs are empty
      Alert.alert('Please, fill the fields...');
      return;
    }
    // Convert strings to float (handling commas as decimal points)
    let sum = Number.parseFloat(value1.replace(',', '.')) +
              Number.parseFloat(value2.replace(',', '.'));
    setResult(sum); // Update result state
  }

  // Function to calculate the subtraction of two numbers
  function subtract() {
    if (value1 == '' || value2 == '') {
      Alert.alert('Please, fill the fields...');
      return;
    }
    let subtraction = Number.parseFloat(value1.replace(',', '.')) -
                      Number.parseFloat(value2.replace(',', '.'));
    setResult(subtraction);
  }

  // Function to calculate the multiplication of two numbers
  function multiply() {
    if (value1 == '' || value2 == '') {
      Alert.alert('Please, fill the fields...');
      return;
    }
    let mult = Number.parseFloat(value1.replace(',', '.')) *
               Number.parseFloat(value2.replace(',', '.'));
    setResult(mult);
  }

  // Function to calculate the division of two numbers
  function division() {
    if (value1 == '' || value2 == '') {
      Alert.alert('Please, fill the fields...');
      return;
    }
    let divide = Number.parseFloat(value1.replace(',', '.')) /
                 Number.parseFloat(value2.replace(',', '.'));
    setResult(divide);
  }

  // Function to calculate the exponentiation of two numbers
  function exponential() {
    if (value1 == '' || value2 == '') {
      Alert.alert('Please, fill the fields...');
      return;
    }
    let exponence = Number.parseFloat(value1.replace(',', '.')) **
                    Number.parseFloat(value2.replace(',', '.'));
    setResult(exponence);
  }

  // Rendering the UI
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the simple calculator!</Text>

      {/* First input field */}
      <Text style={styles.labelField}> Write the first value:</Text>
      <TextInput
        keyboardType='decimal-pad' // Ensures numeric input
        style={styles.fieldScreen}
        onChangeText={(text) => setValue1(text)} // Update state when typing
      />

      {/* Second input field */}
      <Text style={styles.labelField}> Write the second value:</Text>
      <TextInput
        keyboardType='decimal-pad'
        style={styles.fieldScreen}
        onChangeText={(text) => setValue2(text)}
      />

      {/* Buttons for each operation */}
      <TouchableOpacity style={styles.sumButton} onPress={() => sum()}>
        <Text style={styles.buttonText}>Sum!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subtractButton} onPress={() => subtract()}>
        <Text style={styles.buttonText}>Subtract!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.multiplyButton} onPress={() => multiply()}>
        <Text style={styles.buttonText}>Multiply!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.divideButton} onPress={() => division()}>
        <Text style={styles.buttonText}>Divide!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exponentialButton} onPress={() => exponential()}>
        <Text style={styles.buttonText}>Exponence!</Text>
      </TouchableOpacity>

      {/* Displaying the result */}
      <Text style={styles.fieldScreen}> Result: {result}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

// Styles for the UI components
const styles = StyleSheet.create({
  sumButton: {
    width: "50%",
    borderColor: "#1b967c",
    borderWidth: 3,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtractButton: {
    width: "50%",
    borderColor: "#961b1bff",
    borderWidth: 3,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  multiplyButton: {
    width: "50%",
    borderColor: "#271b96ff",
    borderWidth: 3,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divideButton: {
    width: "50%",
    borderColor: "#a2c915ff",
    borderWidth: 3,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exponentialButton: {
    width: "50%",
    borderColor: "#048fcfff",
    borderWidth: 3,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: "green",
    fontWeight: 'bold',
  },
  fieldScreen: {
    fontSize: 20,
    width: "50%",
    borderColor: "#000",
    borderWidth: 3,
    textAlign: 'center',
    borderRadius: 15,
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
    color: "#1b56cc",
    fontWeight: 'bold',
    marginBottom: 20,
  },
  labelField: {
    fontSize: 20,
    color: "green",
    fontWeight: 'bold',
  },
  container: {
    flex: 1, // Takes up the entire screen
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});