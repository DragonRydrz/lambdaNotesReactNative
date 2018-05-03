import React, { Component } from 'react';
import { AsyncStorage, FlatList, View, Text } from 'react-native';
import { Button } from './common/Button';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/deleteNote';
import { signOut } from '../actions/signOut';
import { Card, CardSection } from './common';

class NotesList extends Component {
  render() {
    const { titleStyle, bodyStyle } = styles;
    return (
      <View>
        <FlatList
          style={{ height: '87%' }}
          data={this.props.notes}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <Card>
              <CardSection>
                <Text style={titleStyle}>{item.title.toUpperCase()}</Text>
              </CardSection>
              <CardSection>
                <Text style={bodyStyle}>{item.body}</Text>
              </CardSection>
              <CardSection>
                <Button onPress={() => this.props.deleteNote(item._id)}>
                  Delete
                </Button>
              </CardSection>
            </Card>
          )}
        />
        <Button onPress={this.props.signOut}>Sign Out</Button>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyStyle: { fontSize: 16 },
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
    token: state.token,
  };
};

export default connect(mapStateToProps, { signOut, deleteNote })(NotesList);
