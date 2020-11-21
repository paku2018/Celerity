import * as React from "react";
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


export default class Footer extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <LinkButton 
                    url={require('../../assets/img/footer/ayuda.png')} 
                    text="Ayuda"
                    // pageNavi={() => this.props.navigator.navigate('Put Page name from App.js Category')}
                />
                <LinkButton url={require('../../assets/img/footer/mi_club.png')} text="Mi club"/>
                <LinkButton url={require('../../assets/img/footer/atencion.png')} text="Atencion"/>
                <LinkButton url={require('../../assets/img/footer/mi_cuenta.png')} text="Mi cuenta"/>
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
    },
    btnImg: {
        resizeMode: 'stretch',
        width: width(7),
        height: height(4),
        flexDirection: 'column',
        alignSelf: 'center'
    }
});
