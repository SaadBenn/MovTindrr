import React from 'react';
import Exponent, {Font} from "exponent";
import {StyleSheet, Text, View} from "react-native";
import {Provider} from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import Colors from "./constants/Colors";

EStyleSheet.build(Colors);

const fonts = {
    'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.tff'),
};

class App extends React.Component {
  state = {
      fontLoaded: false,
      rehydrated: false
  }

  async componentDidMount() {
      await Font.loadAsync(fonts);
      this.setState({fontLoaded: true, rehydrated: true});
  }

  render() {
      if (!this.state.fontLoaded && !this.state.rehydrated) {
          return (
              <View style={styles.container}>
                  <Text>Loading...</Text>
              </View>
          );
      }
      return (
          <Provider store={store}>
              <Routes />
          </Provider>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

Exponent.registerRootComponent(App);