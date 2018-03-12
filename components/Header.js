import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class Header extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {
    return (
      <View style={headerStyles.container}>
        <Text style={headerStyles.title}>Doodle <Text style={headerStyles.subtitle}>Keep</Text></Text>
       
      </View>
    );
  }
}

const headerStyles = StyleSheet.create({
  container: {
    //width: 350,
    height: 50,
    padding: 20,
    elevation: 3,
    flexDirection: 'row',
    backgroundColor: '#fb0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "normal",
  },
  input: {
    flex: 1,
    width: 100,
    //elevation: 1,
  },
});

export default Header