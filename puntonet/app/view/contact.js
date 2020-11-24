import 'react-native-gesture-handler';
import * as React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { height, width } from 'react-native-dimension';
import HeaderLink from './util/header_link';
import Footer from './util/footer';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      // flexDirection: "column"
    },
    scroll: {
        height: height(70), 
        marginTop: height(18),
        marginBottom: height(14),
        flexDirection: "column",
        alignSelf: 'center',
    }
});

class ContactScreen extends React.Component {
    render() {
        // const state = useState({ este: '---', ciudad: 'Ambato' });
        const [state, setstate] = useState({
            este: '---', ciudad: 'Ambato'
        })
        return (
            <View style={styles.container}>
                <HeaderLink
                    image={false}
                    imageSource={{}}
                    left={
                    <TouchableOpacity onPress={ () => this.props.navigation.goBack(null) }>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <AntDesign name="left" color={'red'} size={20}></AntDesign>
                            <Text style={{fontSize: width(4), width: width(13), color: 'lightgray'}}>Volver</Text>
                        </View>
                    </TouchableOpacity>
                    }
                    center={
                    <View style={{height: height(10), flexDirection: 'column', marginTop: height(5)}}>
                        <Text style={{fontSize: width(5), alignSelf: 'center', marginBottom: height(2)}}>Contrate nuestros servicios </Text>
                    </View>}
                    right={<View style={{
                                flexDirection: 'row',
                                opacity: 0
                            }}>
                        <AntDesign name="left" color={'red'} size={20}></AntDesign>
                        <Text style={{fontSize: width(4), width: width(13),}}>Volver</Text>
                    </View>}
                />
                <ScrollView style={styles.scroll}>
                    <Text style={{
                        fontSize: width(6),
                        alignSelf: 'center',
                        fontWeight: 'bold',
                    }} >
                        FORMULARIO DE CONTACTO
                    </Text>
                    <Text style={{
                        width: width(80),
                        fontSize: width(3.5),
                        alignSelf: 'center',
                        marginTop: height(1),
                    }} >
                        Estaremos gustosos de poder atender su solicitud, 
                    </Text>
                    <Text style={{
                        width: width(80),
                        fontSize: width(3.5),
                        alignSelf: 'center'
                    }} >
                        por favor llene el formulario con sus comentarios 
                    </Text>
                    <Text style={{
                        width: width(80),
                        fontSize: width(3.5),
                        alignSelf: 'center',
                        marginBottom: height(3),
                    }} >
                        para atenderlo de la manera más adecuada. 
                    </Text>
                    <Text style={{ width: width(80), fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold' }} >
                        Nombre*
                    </Text>
                    <TextInput style={{ marginTop: height(0.3), marginBottom: height(0.5), height: height(6),  width: width(80), borderWidth: width(0.2), borderRadius: 7, fontSize: width(4), borderColor: 'gray', alignSelf: 'center', backgroundColor: '#ffffff', paddingLeft: width(3), paddingRight: width(3),}} />
                    <Text style={{ width: width(80), fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold' }} >
                        Apellido*
                    </Text>
                    <TextInput style={{ marginTop: height(0.3), marginBottom: height(0.5), height: height(6),  width: width(80), borderWidth: width(0.2), borderRadius: 7, fontSize: width(4), borderColor: 'gray', alignSelf: 'center', backgroundColor: '#ffffff', paddingLeft: width(3), paddingRight: width(3),}} />
                    <Text style={{ width: width(80), fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold' }} >
                        Telefono*
                    </Text>
                    <TextInput style={{ marginTop: height(0.3), marginBottom: height(0.5), height: height(6),  width: width(80), borderWidth: width(0.2), borderRadius: 7, fontSize: width(4), borderColor: 'gray', alignSelf: 'center', backgroundColor: '#ffffff', paddingLeft: width(3), paddingRight: width(3),}} />
                    <Text style={{ width: width(80), fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold' }} >
                        Cedula*
                    </Text>
                    <TextInput style={{ marginTop: height(0.3), marginBottom: height(0.5), height: height(6),  width: width(80), borderWidth: width(0.2), borderRadius: 7, fontSize: width(4), borderColor: 'gray', alignSelf: 'center', backgroundColor: '#ffffff', paddingLeft: width(3), paddingRight: width(3),}} />
                    <Text style={{ width: width(80), fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold' }} >
                        Email*
                    </Text>
                    <TextInput style={{ marginTop: height(0.3), marginBottom: height(0.5), height: height(6),  width: width(80), borderWidth: width(0.2), borderRadius: 7, fontSize: width(4), borderColor: 'gray', alignSelf: 'center', backgroundColor: '#ffffff', paddingLeft: width(3), paddingRight: width(3),}} />
                    
                    <Text style={{ width: width(80), fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold' }} >
                        Este requerimiento es para su
                    </Text>
                    <Picker
                        selectedValue={this.state.este}
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({este: itemValue})
                        }>
                        <Picker.Item label="---" value="---" />
                        <Picker.Item label="Empresa" value="Empresa" />
                        <Picker.Item label="Hogar" value="Hogar" />
                    </Picker>

                    <Text style={{ width: width(80), fontSize: width(4.2), alignSelf: 'center', fontWeight: 'bold' }} >
                        Comentarios
                    </Text>
                    <TextInput style={{ marginTop: height(0.3), marginBottom: height(0.5), height: height(16),  width: width(80), borderWidth: width(0.2), borderRadius: 7, fontSize: width(4), borderColor: 'gray', alignSelf: 'center', backgroundColor: '#ffffff', paddingLeft: width(3), paddingRight: width(3),}} />
                    
                </ScrollView>

                <Footer navigation={this.props.navigation} />
            </View>
            
        )
    }
}

export default ContactScreen
