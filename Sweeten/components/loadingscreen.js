import MainService from "./mainService";
import { View, StyleSheet, Text, Animated, Button } from "react-native";

import React from "react";

class ImageLoader extends React.Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <>
        <Animated.Image
          onLoad={this.onLoad}
          source={require("../assets/sweeten_logo.png")}
          style={[
            {
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.1, 0.5],
                  }),
                },
              ],
            },
            this.props.style,
          ]}
        />
      </>
    );
  }
}

export default class LoadingScreen extends React.Component {
  state = {
    loaded: false,
  };

  constructor() {
    super();
    MainService.load(() => this.setState({ loaded: true }));
  }

  render() {
    return (
      <View style={stlyes.body}>
        <Text>Pog</Text>
        {this.state.loaded == true ? (
          <>
            <ImageLoader style={{ aspectRatio: 1, resizeMode: "contain" }} />
          </>
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    );
  }
}

const stlyes = StyleSheet.create({
  body: {
    backgroundColor: "cornflowerblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
