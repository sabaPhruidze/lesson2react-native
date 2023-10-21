import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("shaun");
  const [person, setPerson] = useState({ name: "mario", age: 40 });
  const clickHandler = () => {
    setName("chung-lee");
    setPerson({ name: "luigi", age: 45 });
  };
  return (
    <View style={styles.container}>
      <Text>my name is {name}</Text>
      <Text>
        his name is {person.name} with the age {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
