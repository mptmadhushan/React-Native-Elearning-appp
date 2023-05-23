import * as React from "react";
import { WebView } from "react-native-webview";

export default class Game extends React.Component {
  render() {
    return (
      <WebView
        
        originWhitelist={["*"]}
        source={{
          html: "<iframe width= '100%' height='100%' src='https://previews.customer.envatousercontent.com/files/284246327/index.html' allowfullscreen></iframe>",
        }}
      />
    );
  }
}
