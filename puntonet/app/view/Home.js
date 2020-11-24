import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Image, View, Button } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

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
        <ImageBackground source={require('../assets/img/background.png')} style={styles.image} >
            <Image source={require('../assets/img/logo.png')} 
                style={{ marginTop: height(10), height: width(20.65),
                        width: width(70), resizeMode: 'stretch', alignSelf: 'center' }}
            />
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;