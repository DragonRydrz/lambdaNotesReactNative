import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import NotesList from './NotesList';
import { login } from '../actions/login';
import { createUser } from '../actions/createUser';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    loading: false,
  };

  render() {
    return this.loginOrNotes();
  }

  loginOrNotes() {
    if (this.props.loggedIn) {
      return <NotesList />;
    } else {
      return (
        <Card>
          <CardSection>
            <Input
              placeholder="username"
              label="Username"
              value={this.state.email}
              onChangeText={username => this.setState({ username })}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>{this.state.error}</Text>

          <CardSection>{this.renderButtons()}</CardSection>
        </Card>
      );
    }
  }

  renderButtons() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <View style={styles.buttonViewStyle}>
        <Button
          onPress={() =>
            this.props.login({
              username: this.state.username,
              password: this.state.password,
            })
          }
        >
          Log In
        </Button>
        <Button
          onPress={() =>
            this.props.createUser({
              username: this.state.username,
              password: this.state.password,
            })
          }
        >
          Sign Up
        </Button>
      </View>
    );
  }

  loginPressed() {}
}
const styles = {
  buttonViewStyle: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { login, createUser })(LoginForm);
