import React, { Component } from 'react';
import {
  AsyncStorage,
  FlatList,
  View,
  Text,
  TouchableHighlight,
  Button as Button2,
  SafeAreaView,
} from 'react-native';
import { Button } from './common/Button';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/deleteNote';
import { signOut } from '../actions/signOut';
import { Card, CardSection, Header } from './common';

class NotesList extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <Button2 title={'Add Note'} onPress={() => params.addNote()} />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      addNote: this.addNote,
    });
  }

  addNote = () => {
    this.props.navigation.navigate('AddNote');
  };

  render() {
    console.log(this.props);
    const { titleStyle, bodyStyle } = styles;
    return (
      <SafeAreaView>
        <Header headerText={this.props.username} />
        <FlatList
          style={{ height: '87%' }}
          data={this.props.notes}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <Card>
              <CardSection>
                <Text style={titleStyle}>{item.title.toUpperCase()}</Text>
                {/* <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate('NoteEdit', { note: item })
                  }
                > */}
                {/* <Text>edit</Text>
                </TouchableHighlight> */}
              </CardSection>
              <CardSection>
                <Text style={bodyStyle}>{item.body}</Text>
              </CardSection>
              <CardSection>
                <Button
                  onPress={() =>
                    this.props.navigation.navigate('NoteEdit', { note: item })
                  }
                >
                  Edit
                </Button>
                <Button onPress={() => this.props.deleteNote(item._id)}>
                  Delete
                </Button>
              </CardSection>
            </Card>
          )}
        />
        {/* <Button onPress={this.props.signOut}>Sign Out</Button> */}
      </SafeAreaView>
    );
  }
  componentWillUnmount() {
    this.props.signOut();
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
    username: state.activeUser.username,
  };
};

export default connect(mapStateToProps, { signOut, deleteNote })(NotesList);
