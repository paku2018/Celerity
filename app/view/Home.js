import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    // justifyContent: "center"
  }
});

class HomeScreen extends React.Component {
  timeoutCheck = setTimeout(() => {
    this.props.navigation.navigate('MainMenu')
  }, 3000);

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/img/home_bg.png')} style={styles.image} />
      </View>
    );
  }
}

export default HomeScreen;