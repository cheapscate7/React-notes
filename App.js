import { StackNavigator } from 'react-navigation';


import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

import Header from './components/Header.js';
import NotesList from './components/NotesList.js';
import Footer from './components/Footer.js';
import NewNoteContent from './components/NewNote.js';


/*
  this view show the user's notes
*/
class DefaultView extends React.Component {

    static navigationOptions = {
        header: null,
      };


  render() {
    return (
      <PaperProvider>
        <View style={styles.body}>
          <Header />            
          <NotesList />
          <Footer navigation={this.props.navigation} />
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    //paddingTop: 25,
  },
  notes: {
    marginTop: 5,
  },
});


/*
  this view lets the user make a new note
*/
class NewNoteView extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    }

  render() {
    return (
      <PaperProvider>
      <View style={newNoteViewStyles.newNoteContainer}>
        <Toolbar style={newNoteViewStyles.newNoteHeader}>
          <ToolbarBackAction
            onPress={() => { this.props.navigation.goBack() }}
          />
          <ToolbarContent //style={headerStyles.title} subtitleStyle={headerStyles.subtitle}
            title="New Note"
          />
        </Toolbar>
      </View>
      </PaperProvider>
    );
  }
}


const newNoteViewStyles = StyleSheet.create({
    newNoteHeader: {
      backgroundColor: "#e8e8e8",
    },
    newNoteContainer: {
      backgroundColor: "#e8e8e8",
      flex: 1,
    },
});


/*
  Rooting
*/
const RootStack = StackNavigator(
  {
    Home: {
      screen: DefaultView,
    },
    NewNote: {
      screen: NewNoteView,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}