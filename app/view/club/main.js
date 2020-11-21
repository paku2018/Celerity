import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { AntDesign } from '@expo/vector-icons';
import Header from '../util/header_2';
import Footer from '../util/footer_1';

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
    inputbox: {
      marginTop: height(3),
      marginBottom: height(3),
      height: height(8), 
      width: width(80),
      borderWidth: width(0.2),
      borderRadius: 10,
      borderColor: 'green',
      alignSelf: 'center',
      backgroundColor: '#ffffff',
      paddingLeft: width(5),
      paddingRight: width(5),
    },
    button: {
      backgroundColor: 'white',
      borderRadius: 8,
      borderWidth: width(0.1),
      borderColor: 'gray',
      alignSelf: 'center',
      width: width(80),
      height: height(7),
      justifyContent: 'center',
      marginTop: height(3),
      opacity: 0.8,
    }
});

class MainClubScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/img/club/background.jpg')} style={styles.image}>
            <Header
                image={false}
                imageSource={{}}
                left={
                <TouchableOpacity onPress={ () => this.props.navigation.goBack(null) }>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <AntDesign name="left" color={'black'} size={20}></AntDesign>
                        <Text style={{fontSize: width(4), width: width(13), color: 'lightgray'}}>Volver</Text>
                    </View>
                </TouchableOpacity>
                }
                center={
                <View style={{height: height(10), flexDirection: 'column', marginTop: height(5)}}>
                    <Text style={{fontSize: width(5), alignSelf: 'center', marginBottom: height(2)}}>Club</Text>
                    <Image 
                        source={require('../../assets/img/club/logo_2.png')} 
                        style={{
                            width: width(50),
                            alignSelf: 'center',
                            height: height(7),
                            resizeMode: 'stretch'
                        }}
                    />
                </View>}
                right={<View style={{
                            flexDirection: 'row',
                            opacity: 0
                        }}>
                    <AntDesign name="left" color={'black'} size={20}></AntDesign>
                    <Text style={{fontSize: width(4), width: width(13),}}>Volver</Text>
                </View>}
            />
            <View style={styles.content}>
                <Image 
                    source={require('../../assets/img/club/logo.png')} 
                    style={{
                        marginTop: height(5), 
                        alignSelf: 'center',
                        width: width(50),
                        height: height(19),
                        resizeMode: 'stretch',
                    }}
                />
                <Text style={{fontSize: width(3.8), alignSelf: 'center', marginTop: height(1)}}>
                    Un programa de beneficios para todos nuestros
                </Text>
                <Text style={{fontSize: width(3.8), alignSelf: 'center',}}>
                    clientes Celerity y PuntoHome, que premia tu
                </Text>
                <Text style={{fontSize: width(3.8), alignSelf: 'center',}}>
                    lealtad con puntos que podras canjear por
                </Text>
                <Text style={{fontSize: width(3.8), alignSelf: 'center',}}>
                    increibles premios.
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ClubCategory')}>
                    <Text style={{alignSelf: 'center', color: 'black', fontSize: width(7), fontWeight: 'bold'}}>
                    Bienvenido
                    </Text>
                </TouchableOpacity>
                </View>
                <Footer/>
            </ImageBackground>
        </View>
        );
    }
}

export default MainClubScreen;



