import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Header from './components/Header.js';
import NotesList from './components/NotesList.js';
import Footer from './components/Footer.js';

export default class App extends React.Component {

  render() {
    return (
      <PaperProvider>
        <View style={styles.body}>
          <Header />            
          <NotesList />
          <Footer />
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
