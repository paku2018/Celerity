import 'react-native-gesture-handler';
import * as React from "react";
import { Share, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: "stretch",
    },
    btn: {
        backgroundColor: 'transparent',
        width: width(80),
        // height: height(7),
        alignSelf: 'center',
        marginTop: height(5),
    }
});

class LinkButton extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={this.props.pageNavi}>
                
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        borderColor: 'red',
                        borderWidth: width(0.5),
                        height: height(8.5),
                        borderRadius: 10,
                        alignItems: 'center',
                        paddingRight: width(2.5),
                        paddingLeft: width(2.5),
                        backgroundColor: 'rgba(0,0,0,0.15)',
                        // opacity: 0.1,
                    }}
                >
                    <Text
                        style={{ 
                            // width: width(60),
                            color: 'white',
                            fontSize: width(5.3),
                        }}
                    >
                        {this.props.text}
                    </Text>
                    <Image 
                        source={this.props.imgUrl}
                        style={{
                            width: width(11),
                            resizeMode: 'stretch',
                            height: width(11),
                        }}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

class MainMenuScreen extends React.Component {   
    render() {
        return (
          <View style={styles.container}>
            <ImageBackground source={require('../assets/img/main_menu/background.png')} style={styles.image} >
                <Image source={require('../assets/img/logo.png')} 
                    style={{ marginTop: height(10), height: width(20.65), marginBottom: height(5),
                            width: width(70), resizeMode: 'stretch', alignSelf: 'center' }}
                />
                <LinkButton text="Experiencia Puntonet" imgUrl={require('../assets/img/main_menu/experiencia.png')} 
                    pageNavi={() => this.props.navigation.navigate('Experiencia')} />
                <LinkButton text="Soluciones tecnologicas" imgUrl={require('../assets/img/main_menu/soluciones.png')} 
                    pageNavi={() => this.props.navigation.navigate('Soluciones')} />
                <LinkButton text="Atencion al cliente" imgUrl={require('../assets/img/main_menu/atencion.png')} 
                    pageNavi={() => this.props.navigation.navigate('ATC')} />
                <LinkButton text="Soporte tecnico" imgUrl={require('../assets/img/main_menu/soporte.png')} 
                    pageNavi={() => this.props.navigation.navigate('Servicio')} />
            </ImageBackground>
          </View>
        );
    }
}

export default MainMenuScreen;



