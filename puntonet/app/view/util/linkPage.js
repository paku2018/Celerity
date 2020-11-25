import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import { height, width } from 'react-native-dimension';
import HeaderLink from './header_link';
import Footer from './footer';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      // flexDirection: "column"
    },
});

class LinkPageScreen extends React.Component {
    render() {
        this.state = {
            url: this.props.route.params.url,
            title: this.props.route.params.title,
        };
        var linkURL = this.state.url;
        
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri: linkURL}}
                    style={{marginTop: height(12), marginBottom: height(11)}}
                />
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
                        <Text style={{fontSize: width(5), alignSelf: 'center', marginBottom: height(2)}}>{this.state.title}</Text>
                    </View>}
                    right={<View style={{
                                flexDirection: 'row',
                                opacity: 0
                            }}>
                        <AntDesign name="left" color={'red'} size={20}></AntDesign>
                        <Text style={{fontSize: width(4), width: width(13),}}>Volver</Text>
                    </View>}
                />
                
                <Footer navigation={this.props.navigation} />
            </View>
            
        )
    }
}

export default LinkPageScreen
