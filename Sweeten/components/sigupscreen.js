import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Touchable,
  Button,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
export default class SignUp extends Component {
  state = {
    signup: true,
    signin: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Animatable.Image
          source={require("../assets/sweeten_logo.png")}
          style={styles.logo}
          animation="bounceIn"
          duration={2500}
        />

        {this.state.signup && (
          <Animatable.View
            style={styles.signup}
            animation="fadeInRightBig"
            duration={1500}
          >
            <Text style={styles.logotext}>Sign up!</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({ signup: false, signin: true });
              }}
              style={styles.button}
            >
              <View>
                <Text>Press Me</Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
        )}

        {this.state.signin && (
          <Animatable.View
            style={styles.signup}
            animation="fadeInLeftBig"
            duration={1500}
          >
            <Text style={styles.logotext}>Sign in!</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({ signin: false, signup: true });
              }}
              style={styles.button}
            >
              <View>
                <Text>Press Me too</Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
        )}
      </View>
    );
  }
}

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d4062c",
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
    height: height * 0.3,
    width: height * 0.3,
  },
  signup: {
    flex: 2,
    height: height * 0.5,
    width: width,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
  },
  logotext: {
    marginTop: 15,
    fontSize: height * 0.05,
    fontWeight: "bold",
    color: "black", //#498d3a
    textAlign: "center",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "orange",
    height: height * 0.08,
    width: width * 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
