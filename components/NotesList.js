import React from 'react';
import { StyleSheet, FlatList, ScrollView, View } from 'react-native';
import MasonryList from '@appandflow/masonry-list';

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

class NoteList extends React.Component {
    constructor(props){
        super(props);

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

export default NoteList;