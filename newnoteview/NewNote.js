import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

class NewNote extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {
    return (
      <Toolbar style={newNoteStyles.newNoteContainer}>
          <ToolbarBackAction
            onPress={this._goBack}
          />
          <ToolbarContent //style={headerStyles.title} subtitleStyle={headerStyles.subtitle}
            title="New Note"
          />
        </Toolbar>
    );
  }
}

const newNoteStyles = StyleSheet.create({
    newNoteContainer: {
        //backgroundColor: "#e8e8e8",
    },
});

export default NewNote