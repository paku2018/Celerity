import 'react-native-gesture-handler';
import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview';
import { height, width } from 'react-native-dimension';

class LinkPageScreen extends React.Component {
    render() {
        this.state = {
            url: this.props.route.params.url,
        };
        var linkURL = this.state.url;
        return (
            <WebView
                source={{uri: linkURL}}
                // style={{
                //     marginTop: 20
                // }}
                
            />
        )
    }
}

export default LinkPageScreen
