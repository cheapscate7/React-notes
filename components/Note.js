import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


class Note extends React.Component {
    constructor(props){
        super(props);
        this.state = {fontsize : 16};

    }

    componentDidMount(){
        //as the number of words in the content of a note decreases, make the font bigger
        if(this.props.noteContent.split(" ").length < 10){  //less than 10 words
            this.setState({fontsize : 18});
        }
        else if(this.props.noteContent.split(" ").length < 5 ){   //less than 5 and there is no title
            this.setState({fontsize : 20});
        }
    }

    render() {
        return (
            <View style={noteStyles.note}>
                <Text style={noteStyles.noteTitle}>{this.props.noteTitle}</Text>
                <Text style={{fontSize:this.state.fontsize}}>{this.props.noteContent}</Text>
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
    fontSize: 17,
  },
  noteContent: {
    //fontSize: {this.state.fontsize},
  },
});

export default Note;