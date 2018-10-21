import React from "react";
import { View, AsyncStorage } from "react-native";
import {
  Container,
  Input,
  Item,
  Card,
  Button,
  Label,
  Form,
  Text,
  Spinner
} from "native-base";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "app.json"
  };

  Logout = () => {
    AsyncStorage.multiRemove(["isLogin", "userId"]);
    this.props.navigation.navigate("Links");
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <Container
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button
          block
          style={{ alignSelf: "center", backgroundColor: "#16a085" }}
          onPress={this.Logout}
        >
          <Text>Log Out</Text>
        </Button>
      </Container>
    );
  }
}
