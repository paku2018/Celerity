import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { AntDesign } from '@expo/vector-icons';
import Header from './util/header';
import Footer from './util/footer_1';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
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
    fontSize: width(4.8),
    borderColor: 'rgb(165, 198, 90)',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: width(5),
    paddingRight: width(5),
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 10,
    alignSelf: 'center',
    width: width(50),
    height: height(7),
    justifyContent: 'center',
    marginTop: height(5),
  }
});

class PagosScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/img/pagos/background.png')} style={styles.image}>
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
                <Text style={{fontSize: width(8), alignSelf: 'center'}}>
                  Ingresa 
                  <Text style={{color: 'rgb(165, 198, 90)', fontWeight: 'bold'}}> tu # de cédula</Text>
                </Text>
                <Text style={{fontSize: width(7.9), alignSelf: 'center', fontWeight: 'bold'}}>
                  y paga tu servicio en 
                </Text>
                <Text style={{fontSize: width(7.9), alignSelf: 'center', fontWeight: 'bold'}}>
                  línea 
                </Text>
                <TextInput
                    style={styles.inputbox}
                    placeholder="Cédula de Identidad"
                />
                <Text style={{fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold'}}>
                  Ingresa la cedula del titular de la cuenta 
                </Text>
                <Text style={{fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold'}}>
                  con la que se contrato el servicio de 
                </Text>
                <Text style={{fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold'}}>
                  internet 
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={{alignSelf: 'center', color: 'white',}}>
                    INGRESAR
                  </Text>
                </TouchableOpacity>
            </View>
            <Footer navigation={this.props.navigation} />
        </ImageBackground>
      </View>
    );
  }
}

export default PagosScreen;