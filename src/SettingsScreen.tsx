import React from 'react';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationAction,
} from "react-navigation";
import { Text, StatusBar } from 'react-native';
import { StackNavigationOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { FadesIn } from './animations';
import theme from "./theme";
import { ScrollView } from 'react-native-gesture-handler';
import Constants from "expo-constants";
import { Container, Row, SubHeader, Paragraph, RoundedSelectorButton, ActionButton } from './ui';
import { hasPincode, removePincode } from "./lock/lockstore";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>;
}

interface State {
  pincodeSet: boolean
}

class SettingScreen extends React.Component<Props, State> {
  static navigationOptions: StackNavigationOptions = {
    header: () =>  <Text>header goes here</Text>
  }

  state = {
    pincodeSet: false
  }

  render() {
    return (
      <FadesIn
        style={{ backgroundColor: theme.lightOffwhite }}
        pose={'visible'}
      >
        <ScrollView
          style={{
            backgroundColor: theme.lightOffwhite,
            marginTop: Constants.statusBarHeight + 24,
            paddingTop: 24,
            height: "100%",
          }}
        >
          <Container
            style={{
              paddingBottom: 128,
            }}
          >
            <StatusBar barStyle="dark-content" backgroundColor={theme.lightOffwhite} hidden={false} />
            {/* todo: add reminders using push notifications */}
            {/* <Row
              style={{
                marginBottom: 22,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SubHeader>*reminders</SubHeader>
              <Paragraph
                style={{
                  marginBottom: 16,
                }}
              >
                If you'd like, you can turn on notification reminders that help
                you build up the habit of challenging thoughts.
              </Paragraph>
              <RoundedSelectorButton
                title={"Please remind me"}
                selected={true}
                onPress={() => {

                }}
              />

              <RoundedSelectorButton
                title={"No reminders, thanks"}
                selected={false}
                onPress={() => {

                }}
              />
            </Row> */}

            <Row
              style={{
                marginBottom: 22,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SubHeader>*pincode lock 🔒</SubHeader>
              <Paragraph
                style={{
                  marginBottom: 16,
                }}
              >
                You can lock the app with a pincode if you'd like. Be warned
                that the only way to reset the code is to contact support (which
                can take awhile), so be careful not to forget.
              </Paragraph>
              <ActionButton
                flex={1}
                title={
                  this.state.pincodeSet
                    ? "Reset Pincode"
                    : "Set Pincode"
                }
                width={"100%"}
                fillColor="#EDF0FC"
                textColor={theme.darkBlue}
                style={{
                  borderWidth: 0,
                  borderBottomWidth: 0,
                }}
                onPress={() => {
                  this.props.navigation.navigate('LOCK_SCREEN', {
                    isSettingCode: true,
                  });
                  this.setState({
                    pincodeSet: true,
                  });
                }}
              />
              {this.state.pincodeSet && (
                <ActionButton
                  flex={1}
                  title={"Remove Pincode"}
                  width={"100%"}
                  fillColor="#EDF0FC"
                  textColor={theme.darkBlue}
                  style={{
                    borderWidth: 0,
                    borderBottomWidth: 0,
                    marginTop: 6,
                  }}
                  onPress={async () => {
                    await removePincode();
                    this.setState({
                      pincodeSet: false,
                    });
                  }}
                />
              )}
            </Row>

            <Row
              style={{
                marginBottom: 22,
                display: "flex",
                flexDirection: "column",
              }}
            >

            </Row>

            <Row
              style={{
                marginBottom: 22,
                display: "flex",
                flexDirection: "column",
              }}
            >
            </Row>
          </Container>
        </ScrollView>
      </FadesIn>
    );
  }

}

export default SettingScreen;
