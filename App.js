import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MasonryList from '@appandflow/masonry-list';

import Header from './components/Header.js';
import Note from './components/Note.js';
import Footer from './components/Footer.js';


export default class App extends React.Component {
  

  render() {
    return (
      <View style={styles.body}>
        <Header></Header>
            
        <MasonryList
        style = {styles.notes}
        data ={[
          {title: "hello", content:"whats up bitch"},
          {title: "This is another one", content:"hahahaha"},
          {title: "Wow, you got one too?!", content:"hahahaha"},
          {title: "Wow, you got one too?!", content:"hahahaha"},
          {title: "Wow, you got one too?!", content:"hahahaha"},
          {title: "Wow, you got one too?!", content:"hahahaha"},
          {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
          {title: "Wow, you got one too?!", content:"hahahaha"},
          {title: "Wow, you got one too?!", content:"hahahaha"},
          {title: "Wow, you got one too?!", content:"hahahaha"},
          {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
        ]}
         getHeightForItem= {({ item }) => 100}
         numColumns= {2}
         renderItem= {({ item }) => (<Note noteTitle={item.title} noteContent={item.content}/>)}
         keyExtractor={(item, index) => index}
        />

        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    paddingTop: 25,
  },
  notes: {
    marginTop: 5,
  },
});
