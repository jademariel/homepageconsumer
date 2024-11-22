import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MarketScreen= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Marketplace Screen!</Text>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});