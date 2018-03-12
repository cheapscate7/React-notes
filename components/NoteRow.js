import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Note from './Note.js';

class Note extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={noteRowStyles.noteRow}>
                <Note noteTitle={this.props.noteData[0].title} noteContent={this.props.noteData[0].content} />
                <Note noteTitle={this.props.noteData[1].title} noteContent={this.props.noteData[1].content} />
            </View>
        );
    }
}

const noteRowStyles = StyleSheet.create({
  noteRow: {
    minHeight: 150,
    maxHeight: 300,
  }
});

export default Note;