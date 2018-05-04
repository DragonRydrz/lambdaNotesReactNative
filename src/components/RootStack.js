import { StackNavigator } from 'react-navigation';
import LoginForm from './LoginForm';
import NotesList from './NotesList';
import EditNote from '../Screens/EditNote';

export const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginForm,
    },
    NotesList: {
      screen: NotesList,
    },
    NoteEdit: {
      screen: EditNote,
    },
  },
  {
    initialRouteName: 'Login',
  }
);
