import * as React from "react";
import 'react-native-gesture-handler';
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

class LinkButton extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={this.props.pageNavi}>
                <Image source={this.props.url}  style={styles.btnImg}/>
                <Text 
                    style={{fontSize: width(2.6)}}
                >
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

class Footer extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <LinkButton 
                    url={require('../../assets/img/footer/ayuda.png')} 
                    text="Ayuda"
                    pageNavi={() => this.props.navigation.navigate('Servicio') }
                />
                <LinkButton url={require('../../assets/img/footer/mi_club.png')} text="Mi club"
                    pageNavi={() => this.props.navigation.navigate("ClubMain") } 
                    />
                <LinkButton url={require('../../assets/img/footer/atencion.png')} text="Atencion"
                    pageNavi={() => this.props.navigation.navigate("ATC") }
                    />
                <LinkButton url={require('../../assets/img/footer/mi_cuenta.png')} text="Mi cuenta"
                    // pageNavi={() => this.props.navigation.navigate("") }
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height(11),
        position: 'absolute',
        width: width(100),
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingRight: width(8),
        paddingLeft: width(8),
        paddingTop: height(2),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.5,
        elevation: 10,
    },
    btnImg: {
        resizeMode: 'stretch',
        width: width(7),
        height: width(7),
        flexDirection: 'column',
        alignSelf: 'center'
    }
});

export default Footer
