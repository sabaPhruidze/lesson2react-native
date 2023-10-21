import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("shaun");
  return (
    <View style={styles.container}>
      <Text>my name is {name}</Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" />
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
  buttonContainer: {},
});
