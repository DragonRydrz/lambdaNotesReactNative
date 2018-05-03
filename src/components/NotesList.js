import React, { Component } from 'react';
import { AsyncStorage, FlatList, View, Text } from 'react-native';
import { Button } from './common/Button';
import { connect } from 'react-redux';
import { signOut } from '../actions/signOut';
import { Card, CardSection } from './common';

class NotesList extends Component {
  state = {
    notes: this.props.notes,
  };
  // keyExtractor = item => item._id;
  render() {
    {
      AsyncStorage.getItem('Dragons!').then(response => console.log(response));
      console.log(this.state.notes);
    }
    const { titleStyle, bodyStyle } = styles;
    return (
      <View>
        <FlatList
          style={{ height: '87%' }}
          data={this.state.notes}
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
                <Button>Delete</Button>
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

export default connect(mapStateToProps, { signOut })(NotesList);
