import React from 'react';
import { StyleSheet, FlatList, ScrollView, View } from 'react-native';
import MasonryList from '@appandflow/masonry-list';

import * as firebase from 'firebase';

import Note from './Note.js';
const data = [
    {title: "hello", content:"whats up bitch"},
    {title: "This is another one", content:"hahahaha"},
    {title: "How many?", content:"hahahahahahahahahahahaha"},
    {title: "go on, keep going", content:"punk"},
    {title: "Wow, you got one too?!", content:"hahahaha"},
    {title: "Wow, you got one too?!", content:"ha ha ha haha haha hahahahahahahahahahahah ahahahahahahahah ahaha hahah ahahahahahah ahahahahahahahahah ahaha hahahahahahahahahahahahahahahahahahahahaha  hahahahahahahahah ahahahaha hahaha haha hahahahahahahahah ahahaha"},
    {title: "", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    {title: "Wow, you got one too?!", content:"hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"},
    ];

//const dataFromFirebase = Firebase.retrieveNotes;
class NoteList extends React.Component {
    constructor(props){
        super(props);
        this.itemsRef = this.getRef();
    }
    getRef() {
        return firebaseApp.database().ref();
    }
    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {
    
          // get children as an array
          var items = [];
          snap.forEach((child) => {
            items.push({
              title: child.val().title,
              content: child.val().content,
              _key: child.key
            });
          });
    
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
          });
    
        });
      }
      componentDidMount() {
        this.listenForItems(this.itemsRef);
      }
    
        
    render() {
        return (
            <View style = {noteListStyles.noteListContainer}>
                <MasonryList
                    removeClippedSubviews
                    getHeightForItem= {({ item: any, index: number }) => 300 }
                    data={data}
                    renderItem={({item}) => <View style = {{paddingTop: 5,}}>
                                                <Note noteTitle = {item.title} noteContent = {item.content} />
                                            </View>}
                    keyExtractor = {(item, index) =>index}
                    numColumns = {2}
                    initialNumToRender = {12}
                />
                
            </View>
        );
    }
}

const noteListStyles = StyleSheet.create({
    noteListContainer: {
        marginTop: 5,
        flex: 1,
    }
});

const firebaseConfig = {
    apiKey: "AIzaSyB0RCk0pLXrqZBX84h0mjtYazyqmng5l-U",
    authDomain: "react-notes-5b6a9.firebaseapp.com",
    databaseURL: "https://react-notes-5b6a9.firebaseio.com",
    projectId: "react-notes-5b6a9",
    storageBucket: "react-notes-5b6a9.appspot.com",
    messagingSenderId: "160847919013"
  }; const firebaseApp = firebase.initializeApp(firebaseConfig);


export default NoteList;