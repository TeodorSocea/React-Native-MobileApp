import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LoadingScreen from "./components/loadingscreen";
import SignUp from "./components/sigupscreen";
import * as SignUpHooks from "./components/signupHook";

export default function App() {
  const screen = SignUpHooks();
  return (
    <>
      <StatusBar hidden />
      <View>{screen}</View>
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
