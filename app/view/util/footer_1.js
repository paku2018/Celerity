import * as React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { width, height, totalSize } from "react-native-dimension";


class LinkButton extends React.Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={.7} style={styles.btn} onPress={this.props.pageNavi}>
                <Image source={this.props.url}  style={this.props.styles}/>
            </TouchableOpacity>
        );
    }
}


export default class Footer extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <LinkButton url={require('../../assets/img/footer/ayuda.png')} 
                    // pageNavi={() => this.props.navigator.navigate('Put Page name from App.js Category')}
                />
                <LinkButton url={require('../../assets/img/footer/mi_club.png')} />
                <LinkButton url={require('../../assets/img/footer/atencion.png')} />
                <LinkButton url={require('../../assets/img/footer/mi_cuenta.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: height(93),
      height: height(7),
      position: 'absolute',
      width: width(100),
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingRight: width(5),
      paddingLeft: width(5),
      paddingTop: height(1),
    //   borderBottomWidth: 1,
    //   borderColor: 'green',
    //   shadowColor: 'green',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowOpacity: 0.5,
    },
});
