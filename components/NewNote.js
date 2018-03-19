import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

class NewNote extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          titleText: "",
          contentText: "",
        };
  }

  render(){
    return (
    <View style={newNoteStyles.newNoteContainer}>
        
      <TextInput
        label='Title'
        onChangeText={text => this.setState({ titleText })}
      />
      
    </View>
    );
  }
}

const newNoteStyles = StyleSheet.create({
    newNoteContainer: {
      backgroundColor: "#e8e8e8",
      flex: 1,
    },
});

export default NewNote