import axios from 'axios';

export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';

const host = 'https://ajlnbe.herokuapp.com/api/login';

export const login = data => dispatch => {
  console.log(data, 'in login action');
  axios
    .post(host, data)
    .then(response => {
      const data = response.data;
      dispatch({
        type: LOGIN,
        payload: data,
      });
    })
    .catch(err => {
      console.log(err, 'err');
      alert('Login failed.  Please try again.');
    });
};
