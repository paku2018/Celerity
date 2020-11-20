import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { Ionicons } from '@expo/vector-icons';
import Header from './util/header_2';
import Footer from './util/footer_1';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      // flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
    },
    content: {
        height: height(80), 
        marginTop: height(20),
        flexDirection: "column",
      //   justifyContent: "center"
    },
    btn: {
        width: width(80),
        height: height(10),
        alignSelf: 'center',
    }
});

class LinkButton extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={this.props.pageNavi}>
                <Image source={this.props.url}  style={this.props.styles}/>
            </TouchableOpacity>
        );
    }
}

class ATCScreen extends React.Component {
render() {
    return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/img/pagos/background_.png')} style={styles.image}>
            <Header
                image={false}
                imageSource={{}}
                left={
                <TouchableOpacity onPress={ () => this.props.navigation.goBack(null) }>
                    <Image source={require('../assets/img/back.png')} />
                </TouchableOpacity>
                }
                center={
                <View style={{height: height(10), flexDirection: 'column', marginTop: height(5)}}>
                    <Text style={{fontSize: width(5), alignSelf: 'center', marginBottom: height(2)}}>Solicita tu plan</Text>
                    <Image source={require('../assets/img/club/logo_2.png')} />
                </View>}
                right={<Image source={require('../assets/img/back.png')} />}
            />
            <View style={styles.content}>
                <LinkButton url={require('../assets/img/ATC/btn_1.png')} styles={{marginTop: height(1)}} />
                <LinkButton url={require('../assets/img/ATC/btn_2.png')} styles={{marginTop: height(1)}} />
                <LinkButton url={require('../assets/img/ATC/btn_3.png')} styles={{marginTop: height(1)}} />
                <LinkButton url={require('../assets/img/ATC/btn_4.png')} styles={{marginTop: height(1)}} />
                <LinkButton url={require('../assets/img/ATC/btn_5.png')} styles={{marginTop: height(1)}} />
                <LinkButton url={require('../assets/img/ATC/btn_6.png')} styles={{marginTop: height(1)}} />
                <LinkButton url={require('../assets/img/ATC/btn_7.png')} styles={{marginTop: height(1)}} />
            </View>
            <Footer/>
        </ImageBackground>
    </View>
    );
}
}

export default ATCScreen;



