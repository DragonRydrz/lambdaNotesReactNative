import axios from 'axios';
import { AsyncStorage } from 'react-native';
export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';
const host = 'https://ajlnbe.herokuapp.com/api/login';

export const login = data => dispatch => {
  console.log(data, 'in login action');
  axios
    .post(host, data)
    .then(response => {
      // const user = response.data.user;
      AsyncStorage.setItem('Dragons!', response.data.token);
      dispatch({
        type: LOGIN,
        payload: response.data.user,
      });
    })
    .catch(err => {
      console.log(err, 'err');
      alert('Login failed.  Please try again.');
    });
};
