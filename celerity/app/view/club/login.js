import 'react-native-gesture-handler';
import * as React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
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
        // height: height(80), 
        marginTop: height(20),
        flexDirection: "column",
      //   justifyContent: "center"
    },
    inputbox: {
        marginTop: height(1),
        marginBottom: height(1),
        height: height(5.5), 
        width: width(42),
        borderWidth: width(0.2),
        borderRadius: 10,
        fontSize: width(3),
        borderColor: 'rgb(165, 198, 90)',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        paddingLeft: width(3),
        paddingRight: width(3),
      },
      button: {
        backgroundColor: 'gray',
        borderRadius: 10,
        alignSelf: 'center',
        width: width(30),
        height: height(5),
        justifyContent: 'center',
        marginTop: height(3),
      }
});

class ClubLoginScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            {/* <ImageBackground source={require('../../assets/img/club/background.jpg')} style={styles.image}> */}
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
                    source={require('../../assets/img/club/club_login.png')} 
                    style={{
                        marginTop: height(4), 
                        alignSelf: 'center',
                        width: width(60),
                        height: width(38),
                        resizeMode: 'stretch',
                        marginBottom: height(2)
                    }}
                />
                <Text style={{fontSize: width(10), alignSelf: 'center'}}>
                    Inicia
                    <Text style={{color: 'rgb(165, 198, 90)', fontWeight: 'bold'}}> Sesión</Text>
                </Text>
                <Text style={{fontSize: width(2.5), alignSelf: 'center', marginTop: height(1)}}>
                    Ingresa a tu club para saber cuantos
                </Text>
                <Text style={{fontSize: width(2.5), alignSelf: 'center',}}>
                    puntos tienes y canjéalos por premios,
                </Text>
                <Text style={{fontSize: width(2.5), alignSelf: 'center',}}>
                    además mira tus movimientos y maneja
                </Text>
                <Text style={{fontSize: width(2.5), alignSelf: 'center',}}>
                    tu cuenta
                </Text>
                <Text style={{fontSize: width(3), alignSelf: 'center', marginTop: height(3)}}>
                    CÉDULA DE IDENTIDAD
                </Text>
                <TextInput
                    style={styles.inputbox}
                    placeholder="Cédula de Identidad"
                />
                <TouchableOpacity style={styles.button}>
                  <Text style={{alignSelf: 'center', color: 'white',}}>
                    INGRESAR
                  </Text>
                </TouchableOpacity>
            </View>
            <Footer navigation={this.props.navigation} />
            {/* </ImageBackground> */}
        </View>
        );
    }
}

export default ClubLoginScreen;



