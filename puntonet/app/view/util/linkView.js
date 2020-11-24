import 'react-native-gesture-handler';
import * as React from "react";
import { WebView } from 'react-native-webview';

class LinkViewScreen extends React.Component {
    render() {
        this.state = {
            url: this.props.route.params.url,
        };
        var linkURL = this.state.url;
        return (
            <WebView
                source={{uri: linkURL}}
            />
        )
    }
}

export default LinkViewScreen
