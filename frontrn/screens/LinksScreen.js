import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  AsyncStorage,
  Dimensions
} from "react-native";
import { ExpoLinksView } from "@expo/samples";
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
import Style from "../components/Style";
import { SpaceLine } from "../components/util/SpaceLine";
import { login } from "../actions/register";

import { NavigationActions } from "react-navigation";

const { width, height } = Dimensions.get("window");

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  state = { name: "", password: "", disabled: false, isLoading: true };

  componentWillMount = async () => {
    try {
      let user = await AsyncStorage.getItem("isLogin");
      user = JSON.parse(user);
      if (!!user) {
        await this.setState({ name: user.name, password: user.password });
        this.Login();
      } else {
        this.setState({ isLoading: false, disabled: false });
      }
    } catch (e) {
      this.setState({ isLoading: false, disabled: false });
    }
  };

  Login = () => {
    this.setState({ isLoading: true });
    login(this.state.name, this.state.password, async (err, data) => {
      if (err) {
        console.log(err);
        this.setState({ isLoading: false });
      } else {
        if (data.err) {
          console.log(data.err);
          this.setState({ isLoading: false });
        } else {
          if (data.login == 1) {
            await AsyncStorage.setItem(
              "isLogin",
              JSON.stringify({
                name: this.state.name,
                password: this.state.password
              })
            );
            AsyncStorage.setItem("userId", data.user.id);
            this.setState({ isLoading: false });
            this.props.navigation.navigate("Settings");
          }
        }
      }
    });
  };

  renderLoadingModal = () => {
    return (
      <View
        style={{
          position: "absolute",
          width,
          height,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 99
        }}
      >
        <Spinner
          color="#ccc"
          // size={25}
        />
      </View>
    );
  };

  render() {
    return (
      <Container style={styles.container}>
        {this.state.isLoading && this.renderLoadingModal()}
        <View padder>
          <Form>
            <Item style={Style.input.item} floatingLabel last>
              <Label style={Style.input.label}>Email:</Label>

              <Input
                autoCorrect={false}
                onChangeText={text => this.setState({ name: text })}
              />
            </Item>
            <SpaceLine />
            <Item style={Style.input.item} floatingLabel last>
              <Label style={Style.input.label}>Password:</Label>

              <Input
                autoCorrect={false}
                onChangeText={text => this.setState({ password: text })}
              />
            </Item>
            <Button
              onPress={this.Login}
              disabled={this.state.disabled}
              block
              style={{ backgroundColor: Style.bgcolor, marginTop: 30 }}
            >
              <Text>Login</Text>
              <Spinner
                style={{ display: this.state.disabled ? "flex" : "none" }}
                color="#fff"
                // size={25}
              />
            </Button>
          </Form>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
