import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput } from 'react-native';
import { Card, CardSection, InputNoLabel, Button } from '../components/common';
import { editNote } from '../actions/editNote';

class EditNote extends Component {
  state = {
    body: '',
    title: '',
    _id: '',
  };

  componentDidMount() {
    const { _id, title, body } = this.props.navigation.state.params.note;
    this.setState({ _id, title, body });
  }

  titleChange(title) {
    this.setState({ title });
  }
  bodyChange(body) {
    this.setState({ body });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputNoLabel
            value={this.state.title}
            placeholder="Note Title"
            onChangeText={title => this.titleChange(title)}
          />
        </CardSection>
        <CardSection>
          <TextInput
            style={styles.inputStyle}
            value={this.state.body}
            placeholder="Note Body"
            onChangeText={body => this.bodyChange(body)}
            multiline={true}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={() => {
              this.props.editNote(this.state);
              this.props.navigation.pop();
            }}
          >
            Submit Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 23,
    flex: 5,
  },
};

export default connect(null, { editNote })(EditNote);
