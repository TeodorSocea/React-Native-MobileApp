import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
export default class SignUp extends Component {
  state = {
    signup: true,
    signin: false,
    showPass: false,
  };

  render() {
    const [data, setData] = React.useState({
      email: "",
      password: "",
      check_textInputChange: false,
      secureTextEntry: true,
    });
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
            animation="fadeInUpBig"
            duration={1500}
          >
            <Text style={styles.logotext}>Sign up!</Text>
            <View
              style={{
                justifyContent: "space-around",
                width: width * 0.9,
                marginVertical: height * 0.02,
                marginLeft: width * 0.05,
                marginRight: width * 0.05,
                fontSize: height * 0.01,
              }}
            >
              <Text style={{ fontSize: height * 0.025, fontWeight: "bold" }}>
                Email
              </Text>
              <View style={styles.action}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ marginRight: width * 0.02 }}
                />
                <TextInput
                  placeholder="Your email adress"
                  style={styles.input}
                />
              </View>
              <Text style={{ fontSize: height * 0.025, fontWeight: "bold" }}>
                Password
              </Text>
              <View style={styles.action}>
                <FontAwesomeIcon
                  icon={faKey}
                  style={{ marginRight: width * 0.02 }}
                />
                <TextInput
                  placeholder="Your password"
                  style={styles.input}
                  secureTextEntry={!this.state.showPass}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({ showPass: !this.state.showPass })
                  }
                >
                  {this.state.showPass ? (
                    <FontAwesomeIcon icon={faEye} size={height * 0.04} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} size={height * 0.04} />
                  )}
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: height * 0.025, fontWeight: "bold" }}>
                Repeat Password
              </Text>
              <View style={styles.action}>
                <FontAwesomeIcon
                  icon={faKey}
                  style={{ marginRight: width * 0.02 }}
                />
                <TextInput
                  placeholder="Confirm your password"
                  style={styles.input}
                  secureTextEntry={!this.state.showPass}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({ showPass: !this.state.showPass })
                  }
                >
                  {this.state.showPass ? (
                    <FontAwesomeIcon icon={faEye} size={height * 0.04} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} size={height * 0.04} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ signup: false, signin: true });
              }}
              style={styles.button}
            >
              <View>
                <Text>Create Account</Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
        )}

        {this.state.signin && (
          <Animatable.View
            style={styles.signup}
            animation="fadeInUpBig"
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
  input: {
    fontSize: height * 0.025,
    flex: 1,
    marginRight: width * 0.05,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "black",
    marginBottom: height * 0.02,
  },
});
