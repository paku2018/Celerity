import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { Ionicons } from '@expo/vector-icons';
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
    borderColor: 'green',
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
                      <Image source={require('../assets/img/back.png')} />
                  </TouchableOpacity>
                }
                center={<Text style={{fontSize: width(5)}}>Pagos</Text>}
                right={<Image source={require('../assets/img/back.png')} />}
            />
            <View style={styles.content}>
                <Text style={{fontSize: width(8), alignSelf: 'center'}}>
                  Ingresa 
                  <Text style={{color: 'green'}}> tu # de cédula</Text>
                </Text>
                <Text style={{fontSize: width(7.9), alignSelf: 'center', fontWeight: 'bold'}}>
                  y paga tu servicio en 
                </Text>
                <Text style={{fontSize: width(7.9), alignSelf: 'center', fontWeight: 'bold'}}>
                  línea 
                </Text>
                <TextInput
                    style={styles.inputbox}
                    placeholder="Cedula de Identidad"
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
            <Footer/>
        </ImageBackground>
      </View>
    );
  }
}

export default PagosScreen;