import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import {
  Container,
  View,
  Content,
  Text,
  Form,
  Input,
  Item,
  Label,
  Button,
  Spinner,
  Switch
} from "native-base";
import { WebBrowser } from "expo";

import { register } from "./../actions/register";

import Style from "../components/Style";

import { SpaceLine } from "../components/util/SpaceLine";

const { width, height } = Dimensions.get("window");
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = { name: "", email: "", password: "", role: false, disabled: false };

  signUp = () => {
    const { name, email, password, role } = this.state;
    register(email, password, name, role, (err, data) => {
      if (err) {
        console.log("提供信息类型错误", err);
      } else {
        if (data.error) {
          console.log("提供信息不全", data.error);
        } else {
          console.log(data);
        }
      }
    });
  };

  render() {
    return (
      <Container style={{ flex: 1, justifyContent: "center" }}>
        <View padder>
          <Form>
            <Item style={Style.input.item} floatingLabel last>
              <Label style={Style.input.label}>Name</Label>
              <Input
                value={this.state.name}
                onChangeText={text => this.setState({ name: text })}
                autoCorrect={false}
              />
            </Item>
            <SpaceLine />
            <Item style={Style.input.item} floatingLabel last>
              <Label style={Style.input.label}>Email</Label>
              <Input
                value={this.state.email}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={text => this.setState({ email: text })}
                autoCorrect={false}
              />
            </Item>
            <SpaceLine />
            <Item style={Style.input.item} floatingLabel last>
              <Label style={Style.input.label}>Password</Label>
              <Input
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                autoCorrect={false}
                secureTextEntry={true}
              />
            </Item>
            <SpaceLine />
            <View style={Style.switch}>
              <Text style={[Style.text, { marginTop: 20, marginLeft: 18 }]}>
                Admin:{" "}
              </Text>
              <Switch
                onValueChange={val => this.setState({ role: val })}
                style={{ marginTop: 20, paddingBottom: 20, marginRight: 18 }}
                value={this.state.role}
              />
            </View>

            <Button
              onPress={this.signUp}
              disabled={this.state.disabled}
              block
              style={{ backgroundColor: Style.bgcolor, marginTop: 30 }}
            >
              <Text>Sign Up</Text>
              <Spinner
                style={{ display: this.state.disabled ? "flex" : "none" }}
                color="#fff"
                // size={25}
              />
            </Button>
            <Button
              onPress={() => this.props.goLogin()}
              block
              style={{ backgroundColor: Style.bgcolor, marginTop: 15 }}
            >
              <Text>Login</Text>
            </Button>
          </Form>
        </View>
      </Container>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
