import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { AntDesign } from '@expo/vector-icons';
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
        marginTop: height(25),
        flexDirection: "column",
      //   justifyContent: "center"
    },
    btn: {
        width: width(80),
        height: height(7),
        alignSelf: 'center',
        marginBottom: height(1),
    }
});

class LinkButton extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={this.props.changeView}>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        borderWidth: width(0.2),
                        height: height(6.5),
                        borderRadius: 10,
                        // paddingTop: height(0.8),
                        alignItems: 'center',
                        paddingRight: width(0.5),
                        paddingLeft: width(2.5),
                    }}
                >
                    {/* <AntDesign name="right" color={'transparent'} size={30}></AntDesign> */}
                    <Text
                        style={{ 
                            width: width(60),
                            // paddingTop: height(0.5)
                        }}
                    >
                        {this.props.text}
                    </Text>
                    <AntDesign name="right" color={'rgb(165, 198, 90)'} size={30}></AntDesign>
                </View>
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
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <AntDesign name="left" color={'rgb(165, 198, 90)'} size={20}></AntDesign>
                        <Text style={{fontSize: width(4), width: width(13), color: 'lightgray'}}>Volver</Text>
                    </View>
                </TouchableOpacity>
                }
                center={
                <View style={{height: height(10), flexDirection: 'column', marginTop: height(5)}}>
                    <Text style={{fontSize: width(5), alignSelf: 'center', marginBottom: height(2)}}>ATC </Text>
                    <Image 
                        source={require('../assets/img/club/logo_2.png')} 
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
                <LinkButton text="Gestiona tu cuenta" 
                    changeView={() => this.props.navigation.navigate("LinkPage", { url: 'https://puntonet.custhelp.com/app/login_page/', title: 'Gestiona tu cuenta ' })} 
                />
                <LinkButton text="Solicita traslado" 
                    changeView={() => this.props.navigation.navigate("LinkPage", { url: 'https://puntonet.custhelp.com/app/login_page_solicitud_traslado/', title: 'Solicita traslado ' })} 
                />
                <LinkButton text="Aumenta velocidad" 
                    changeView={() => this.props.navigation.navigate("LinkPage", { url: 'https://puntonet.custhelp.com/app/login_page_upgrade_velocidad/', title: 'Aumenta velocidad ' })} 
                />
                <LinkButton text="Contactanos" 
                    changeView={() => this.props.navigation.navigate("LinkPage", { url: 'https://www.celerity.ec/oficinas/', title: 'Contactanos ' })} 
                />
                <LinkButton text="Revisa valores pendientes" 
                    // changeView={() => this.props.navigation.navigate("LinkPage", { url: '' })} 
                />
                <LinkButton text="Chat con asesor" 
                    changeView={() => this.props.navigation.navigate("LinkPage", { url: 'https://puntonet.custhelp.com/app/chat/chat_launch/', title: 'Chat con asesor ' })} 
                />
                <LinkButton text="Otros servicios" 
                    changeView={() => this.props.navigation.navigate("LinkPage", { url: 'https://puntonet.custhelp.com/app/answers/detail/a_id/51/', title: 'Otros servicios ' })} 
                />
            </View>
            <Footer navigation={this.props.navigation} />
        </ImageBackground>
    </View>
    );
}
}

export default ATCScreen;



