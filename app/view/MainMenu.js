import 'react-native-gesture-handler';
import * as React from "react";
import { Share, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white'
    },
    logoView: {
        marginTop: height(5),
        marginBottom: height(7)
    },
    logoImg: {
        alignSelf: 'center',
        width: width(50),
        height: height(8),
        resizeMode: 'stretch',
    },
    buttons: {
        marginLeft: width(22),
        marginRight: width(22),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btnView: {
        shadowColor: "gray",
        shadowOpacity: 0,
        shadowRadius: 2,
        shadowOffset: {
            height: 10,
            width: 10
        },
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 15,
        width: width(23),
        height: height(13),
        marginTop: height(3),
        flexDirection: 'column',
    },
    btnLogo: {
        alignSelf: 'center',
        width: width(15),
        height: height(7),
        resizeMode: 'stretch',
        marginBottom: height(1),
        marginTop: height(1)
    },
    btnText: {
        fontSize: width(2.5),
        alignSelf: 'center',
    },
    bgView: {
        
    },
    bgImg: {
        alignSelf: 'center',
        width: width(100),
        height: height(32),
        bottom: 0,
        resizeMode: 'stretch',
    }
});

class ButtonStyle extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={this.props.pageNavi}>
                <View elevation={5} style={styles.btnView}>
                    <Image source={this.props.url}  style={styles.btnLogo}/>
                    <Text style={styles.btnText}>{this.props.text_top}</Text>
                    <Text style={styles.btnText}>{this.props.text_low}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class MainMenuScreen extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoView}>
                <Image source={require('../assets/img/main_menu/logo.png')} style={styles.logoImg}></Image>
            </View>
            <View style={styles.buttons}>
                <ButtonStyle 
                    url={require('../assets/img/main_menu/btn_1.png')}
                    pageNavi={() => this.props.navigation.navigate("Solicita")} 
                    text_top="Solicita"
                    text_low="tu plan"
                />
                <ButtonStyle 
                    url={require('../assets/img/main_menu/btn_2.png')}  
                    pageNavi={() => this.props.navigation.navigate("ClubMain")}
                    text_top="Mi club"
                    text_low="Celerity"
                />
            </View>
            <View style={styles.buttons}>
                <ButtonStyle 
                    url={require('../assets/img/main_menu/btn_3.png')}  
                    pageNavi={() => this.props.navigation.navigate("ATC")} 
                    text_top="Atencion"
                    text_low="al cliente"
                />
                <ButtonStyle 
                    url={require('../assets/img/main_menu/btn_4.png')}  
                    pageNavi={() => this.props.navigation.navigate("Pagos")}
                    text_top="Pago en"
                    text_low="linea"
                />
            </View>
            <View style={styles.buttons}>
                <ButtonStyle 
                    url={require('../assets/img/main_menu/btn_5.png')}  
                    pageNavi={() => this.props.navigation.navigate("Servicio")} 
                    text_top="Servicio"
                    text_low="tecnico"
                />
                <ButtonStyle 
                    url={require('../assets/img/main_menu/btn_6.png')}  
                    text_top="Call me"
                    text_low="Celerity"
                />
            </View>
            <View style={styles.bgView}>
                <Image source={require('../assets/img/main_menu/back_img.png')} style={styles.bgImg}></Image>
            </View>
        </SafeAreaView>
    );
  }
}

export default MainMenuScreen;