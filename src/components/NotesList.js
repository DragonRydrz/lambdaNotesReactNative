import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection } from './common';

class NotesList extends Component {
  render() {
    console.log(this.props.token);
    console.log(this.props.notes);
    return null;
  }
}
const mapStateToProps = state => {
  return {
    notes: state.notes,
    token: state.token,
  };
};
export default connect(mapStateToProps)(NotesList);
