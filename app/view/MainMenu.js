import 'react-native-gesture-handler';
import * as React from "react";
import { Share, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

const styles = StyleSheet.create({
    container: {
        // marginTop: 65,
        flex: 1,
        // flexDirection: "column"
    },
    image: {
        flex: 1,
        // flexDirection: "column",
        resizeMode: "cover",
        // justifyContent: "space-between"
    },
    buttons: {
        // width: width(80),
        marginLeft: width(15),
        marginRight: width(15),
        flexDirection: "row",
        // height: height(20),
        // marginTop: height(10)
    },
});

class ButtonStyle extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={this.props.pageNavi}>
                <Image source={this.props.url}  style={this.props.styles}/>
            </TouchableOpacity>
        );
    }
}

class MainMenuScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/img/main_menu/background.png')} style={styles.image}>
                <View style={{marginLeft: width(15), marginRight: width(15), flexDirection: "row", marginTop: height(20)}}>
                    <ButtonStyle url={require('../assets/img/main_menu/btn_1.png')} styles={{width: width(30), marginRight: width(10)}} pageNavi={() => this.props.navigation.navigate("Solicita")} />
                    <ButtonStyle url={require('../assets/img/main_menu/btn_2.png')} styles={{width: width(30)}} pageNavi={() => this.props.navigation.navigate("ClubMain")}/>
                </View>
                <View style={styles.buttons}>
                    <ButtonStyle url={require('../assets/img/main_menu/btn_3.png')} styles={{width: width(30), marginRight: width(10)}} pageNavi={() => this.props.navigation.navigate("ATC")} />
                    <ButtonStyle url={require('../assets/img/main_menu/btn_4.png')} styles={{width: width(30)}} pageNavi={() => this.props.navigation.navigate("Pagos")}/>
                </View>
                <View style={styles.buttons}>
                    <ButtonStyle url={require('../assets/img/main_menu/btn_5.png')} styles={{width: width(30), marginRight: width(10)}} pageNavi={() => this.props.navigation.navigate("Servicio")} />
                    <ButtonStyle url={require('../assets/img/main_menu/btn_6.png')} styles={{width: width(30)}} />
                </View>
            </ImageBackground>
        </View>
    );
  }
}

export default MainMenuScreen;