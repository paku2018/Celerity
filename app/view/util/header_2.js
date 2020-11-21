import * as React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

export default class Header extends React.Component {
    renderContent() {
        return (
          <View style={styles.content}>
            <View style={styles.left}>{this.props.left}</View>
            <View style={styles.center}>{this.props.center}</View>
            <View style={styles.right}>{this.props.right}</View>
          </View>
        );
    }

    renderHeaderWithImage() {
        return (
            <ImageBackground style={styles.container} source={this.props.imageSource}>
                {this.renderContent()}
            </ImageBackground>
        );
    }
    renderHeaderWithoutImage() {
        return (
            <View style={[{ backgroundColor: '#f8f8f8' }, styles.container]}>
                {this.renderContent()}
            </View>
        );
    }

    render() {
        return this.props.image
          ? this.renderHeaderWithImage()
          : this.renderHeaderWithoutImage();
    }
}

const styles = StyleSheet.create({
    container: {
      top: 0,
      position: 'absolute',
      width: width(100),
      height: height(20),
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#f8f8f8',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
    },
    content: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Dimensions.get('window').height * 0.03,
      height: Dimensions.get('window').height * 0.09,
    },
    left: {
        marginLeft: width(2),
    },
    center: {
        flexDirection: 'column',
    },
    right: {
        opacity: 0,
        // width: width(40)
    },
  });


