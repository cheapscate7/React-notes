import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class Note extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={noteStyles.note}>
                <Text style={noteStyles.noteTitle}>{this.props.noteTitle}</Text>
                <Text style={noteStyles.noteContent}>{this.props.noteContent}</Text>
            </View>
        );
    }
}

const noteStyles = StyleSheet.create({
  note: {
    margin: 5,
    width: 170,
    //minHeight: 100,
    maxHeight: 300,
    backgroundColor: "white",
    padding: 5,
    elevation: 1,
  },
  noteTitle: {
    fontWeight: "bold",
  },
  noteContent: {
    fontSize: 16,
  },
});

export default Note;