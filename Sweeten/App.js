import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LoadingScreen from "./components/loadingscreen";
import SignUp from "./components/sigupscreen";

export default function App() {
  return (
    <>
      <StatusBar hidden backgroundColor="blue" />
      <SignUp />
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
