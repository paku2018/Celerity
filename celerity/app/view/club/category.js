import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
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
        height: height(80), 
        marginTop: height(20),
        flexDirection: "column",
        paddingTop: height(5),
      //   justifyContent: "center"
    },
    btn: {
        width: width(80),
        height: height(7.3),
        alignSelf: 'center',
        // backgroundColor: 'white',
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
                        borderColor: 'gray',
                        borderWidth: width(0.2),
                        height: height(6.5),
                        borderRadius: 10,
                        alignItems: 'center',
                        // paddingTop: height(0.8),
                        paddingRight: width(0.5),
                        paddingLeft: width(2.5),
                        backgroundColor: 'white',
                        opacity: 0.5,
                    }}
                >
                    {/* <AntDesign name="right" color={'transparent'} size={30}></AntDesign> */}
                    <Text
                        style={{ 
                            width: width(60),
                            fontSize: width(4.3),
                            // paddingTop: height(0.5)
                        }}
                    >
                        {this.props.text}
                    </Text>
                    <AntDesign name="right" color={'black'} size={30}></AntDesign>
                </View>
            </TouchableOpacity>
        );
    }
}

class CategoryClubScreen extends React.Component {
    render() {
        return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../../assets/img/club/background.jpg')} style={styles.image}>
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
                    <LinkButton text="Conoce nuestro club" 
                        changeView={() => this.props.navigation.navigate("LinkPage", { url: 'https://www.celerity.ec/clubcelerity/' })} 
                    />
                    <LinkButton text="Consulta tus puntos" 
                        changeView={() => this.props.navigation.navigate('ClubLogin')} 
                    />
                    <LinkButton text="Revisa tu estado de cuenta" />
                    <LinkButton text="Tarjeta virtual Celerity" />
                    <LinkButton text="Canjea tus premios" />
                    <LinkButton text="Accede a tus beneficios" />
                    {/* <WebView 
                        source={{html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                        style={{marginTop: 20}}
                    /> */}
                </View>
                <Footer navigation={this.props.navigation} />
            </ImageBackground>
        </ScrollView>
        );
    }
}

export default CategoryClubScreen;



