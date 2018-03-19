import { withNavigation } from 'react-navigation';

import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

class Footer extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {
    return (
      <View style={footerStyles.footerContainer}>
        <Button 
          onPress={() => {
            this.props.navigation.navigate('NewNote');
          }}
          style={footerStyles.add} 
          color= "#e8e8e8"
          title="add"
        />
      </View>
    );
  }
}

const footerStyles = StyleSheet.create({
  footerContainer: {
    padding: 5,
    backgroundColor: "white",
  },
  add: {
    backgroundColor: "#e8e8e8",
    color: "black",
    borderWidth: 2,
    borderColor: "gray",
  },
});

export default withNavigation(Footer)