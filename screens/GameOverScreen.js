import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>WE WON</Text>
      <Text>IN {props.roundCount} ROUNDS!</Text>
      <Text>THE NUMBER WAS: {props.finalNumber} </Text>
      <Button title="NEW GAME" onPress={props.newGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
