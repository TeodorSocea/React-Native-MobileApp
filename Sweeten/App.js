import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LoadingScreen from "./components/loadingscreen";

export default function App() {
  return (
    <LoadingScreen>
      <StatusBar hidden />
    </LoadingScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
