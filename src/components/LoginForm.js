import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { AsyncStorage, Text, View } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import NotesList from './NotesList';
import { login } from '../actions/login';
import { createUser } from '../actions/createUser';
import { authorize } from '../actions/authorize';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    loading: false,
    loggedIn: false,
  };

  componentDidMount() {
    const token = AsyncStorage.getItem('Dragons')
      .then(response => response)
      .catch(err => null);
    if (token) {
      this.props.authorize(token);
    }
  }

  render() {
    return this.loginOrNotes();
  }

  loginOrNotes() {
    if (this.props.loggedIn) {
      return <NotesList />;
      console.log(this.props.loggedIn);
      // return (
      //   <View style={{ flex: 1, borderWidth: 5, fontSize: 20 }}>
      //     <Text>SHOW ME THIS</Text>
      //   </View>
      // );
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
          onPress={() => {
            const user = {
              username: this.state.username,
              password: this.state.password,
            };
            this.setState({ username: '', password: '' });
            return this.props.login(user);
          }}
        >
          Log In
        </Button>
        <Button
          onPress={() => {
            const user = {
              username: this.state.username,
              password: this.state.password,
            };
            this.setState({ username: '', password: '' });
            return this.props.createUser(user);
          }}
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

export default connect(mapStateToProps, { login, createUser, authorize })(
  LoginForm
);
