import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class LoginForm extends Component {
  render() {
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput />

        <FormLabel>Password</FormLabel>
        <FormInput />

        <Button
          title='Login'
          buttonStyle={styles.loginButtonStyle}
        />

        <Text
          style={styles.signUpLinkStyle}
          onPress={() => Actions.signUp()}
        >
          No account? Tap here to sign up.
        </Text>
      </View>
    );
  }
};

const styles = {
  signUpLinkStyle: {
    color: 'blue',
    marginLeft: 15,
    marginTop: 15
  },
  loginButtonStyle: {
    backgroundColor: 'blue'
  }
}

export default LoginForm;
