import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { AntDesign } from '@expo/vector-icons';
import Header from './util/header';
import Footer from './util/footer';

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
        marginTop: height(23),
        flexDirection: "column",
      //   justifyContent: "center"
    },
    btn: {
        width: width(80),
        height: height(7.5),
        alignSelf: 'center',
        marginTop: height(1.5),
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
                        borderWidth: width(0.2),
                        height: height(7),
                        borderRadius: 10,
                        borderColor: 'white',
                        alignItems: 'center',
                        paddingRight: width(0.5),
                        paddingLeft: width(2.5),
                        backgroundColor: 'rgba(0,0,0,0.15)',
                    }}
                >
                    <Text
                        style={{ 
                            // width: width(55),
                            color: 'white',
                            // marginLeft: width(4),
                            fontSize: width(5)
                            // paddingTop: height(0.5)
                        }}
                    >
                        {this.props.text}
                    </Text>
                    <AntDesign name="right" color={'white'} size={30}></AntDesign>
                </View>
            </TouchableOpacity>
        );
    }
}

class ATCScreen extends React.Component {
render() {
    return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/img/util/background.png')} style={styles.image}>
            <Header
                image={false}
                imageSource={{}}
                left={
                <TouchableOpacity onPress={ () => this.props.navigation.goBack(null) }>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <AntDesign name="left" color={'rgb(210, 5, 5)'} size={20}></AntDesign>
                        <Text style={{fontSize: width(4), width: width(13), color: 'lightgray'}}>Volver</Text>
                    </View>
                </TouchableOpacity>
                }
                center={
                <View style={{height: height(10), flexDirection: 'column', marginTop: height(5)}}>
                    <Text style={{fontSize: width(5), alignSelf: 'center', marginBottom: height(2)}}>Atencion al cliente</Text>
                    <Image 
                        source={require('../assets/img/logo.png')} 
                        style={{
                            width: width(40),
                            alignSelf: 'center',
                            height: width(11.8),
                            resizeMode: 'stretch'
                        }}
                    />
                </View>}
                right={<View style={{
                            flexDirection: 'row',
                            opacity: 0
                        }}>
                    <AntDesign name="left" color={'red'} size={20}></AntDesign>
                    <Text style={{fontSize: width(4), width: width(13),}}>Volver</Text>
                </View>}
            />
            <View style={styles.content}>
                <LinkButton text="Gestiona tu cuenta" 
                    pageNavi={() => this.props.navigation.navigate("LinkPage", { url: 'https://puntonet.custhelp.com/app/login_page_corp/', title: 'Gestiona tu cuenta ' })}
                />
                <LinkButton text="Facturacion electronica" 
                    // pageNavi={() => this.props.navigation.navigate("LinkPage", { url: 'https://www.puntonet.ec/', title: ' ' })}
                />
                <LinkButton text="Web mail" 
                    pageNavi={() => this.props.navigation.navigate("LinkPage", { url: 'https://www.puntonet.ec/webmail-empersarial/', title: 'Web mail ' })}
                />
                <LinkButton text="Su ejecutivo" 
                    // pageNavi={() => this.props.navigation.navigate("LinkPage", { url: 'https://www.puntonet.ec/', title: ' ' })}
                />
                <LinkButton text="Contrate nuestros servicios " 
                    pageNavi={() => this.props.navigation.navigate("LinkPage", { url: 'https://www.puntonet.ec/contactanos/', title: 'Contrate nuestros servicios ' })}
                />
                <LinkButton text="Traslado de servicio" 
                    // pageNavi={() => this.props.navigation.navigate("LinkPage", { url: 'https://www.puntonet.ec/', title: ' ' })}
                />
                <LinkButton text="Oficinas" 
                    pageNavi={() => this.props.navigation.navigate("LinkPage", { url: 'https://www.puntonet.ec/oficinas-a-nivel-nacional/', title: 'Oficinas ' })}
                />
            </View>
            <Footer navigation={this.props.navigation} />
        </ImageBackground>
    </View>
    );
}
}

export default ATCScreen;



