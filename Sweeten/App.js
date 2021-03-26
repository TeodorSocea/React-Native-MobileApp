import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "./components/context";
import { AuthScreen } from "./components/AuthScreen";
import { Explore } from "./components/Explore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return { ...prevState, isLoading: false, userToken: action.token };
      case "LOGIN":
        return {
          ...prevState,
          isLoading: false,
          userName: action.id,
          userToken: action.token,
        };
      case "LOGOUT":
        return {
          ...prevState,
          isLoading: false,
          userName: null,
          userToken: null,
        };
      case "REGISTER":
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(() => ({
    signIn: async (userName, password) => {
      let userToken;
      userToken = null;
      if (userName == "user" && password == "pass") {
        userToken = "t";
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log("error login");
        }
      }
      dispatch({ type: "LOGIN", id: userName, token: userToken });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem("userToken");
      } catch (e) {
        console.log("error logout");
      }
      dispatch({ type: "LOGOUT" });
    },
    signUp: () => {
      setUserToken("asdasd");
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log("error use effect");
      }
      dispatch({ type: "REGISTER", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <StatusBar hidden />
      <AuthContext.Provider value={authContext}>
        {loginState.userToken != null ? <Explore /> : <AuthScreen />}
      </AuthContext.Provider>
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
