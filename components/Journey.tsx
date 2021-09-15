import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const Journey: React.FC<Props> = ({ navigation }) => {
    const [fromInput, setFromInput] = useState('');
    const [toInput, setToInput] = useState('');

    const handleSubmit = () => {};


  return (
    <View style={styles.container}>
      <Text style={styles.from}>From:</Text>
      <TextInput
        defaultValue={fromInput}
        placeholder="PostCode/Location"
        style={styles.input}
        onChangeText={(fromInput) => setFromInput(fromInput)}
      />
      <Text style={styles.to}>To:</Text>
      <TextInput
        defaultValue={toInput}
        placeholder="PostCode/Location"
        style={styles.input}
        onChangeText={(toInput) => setToInput(toInput)}
      />
      <Button title="Submit" color="black" onPress={handleSubmit} />
    
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    from: {
      fontSize: 20,
      fontWeight: "bold",
      margin: 16,
    },
    to: {
      fontSize: 20,
      fontWeight: "bold",
      margin: 16,
    },
    input: {
      borderColor: "black",
      borderWidth: 1,
      width: 100,
    },
  });

export default Journey;