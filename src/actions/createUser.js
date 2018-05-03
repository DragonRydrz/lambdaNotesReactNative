import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

const host = 'https://ajlnbe.herokuapp.com/api/register';

export const createUser = data => dispatch => {
  axios
    .post(host, data)
    .then(response => {
      const data = response.data;
      console.log(response, data);
      dispatch({
        type: CREATE_USER,
        payload: data,
      });
    })
    .catch(err => {
      console.log(err);
      alert('Account creation failed.  Please try again.');
    });
};
