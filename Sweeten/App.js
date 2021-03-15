import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LoadingScreen from "./components/loadingscreen";

export default function App() {
  return (
    <>
      <StatusBar hidden backgroundColor="blue" />
      <LoadingScreen style={styles.loading}></LoadingScreen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loading: {
    backgroundColor: "cornflowerblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    padding: 0,
  },
});
