import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import NotesList from './NotesList';
import EditNote from '../Screens/EditNote';
import AddNote from '../Screens/AddNote';

export const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginForm,
      navigationOptions: {
        title: 'Sign In',
      },
    },
    NotesList: {
      screen: NotesList,
      navigationOptions: {
        // title: this.props.username,
      },
    },
    NoteEdit: {
      screen: EditNote,
    },
    AddNote: {
      screen: AddNote,
      navigationOptions: {
        title: 'Add New Note',
      },
    },
  },
  {
    initialRouteName: 'Login',
  }
);
