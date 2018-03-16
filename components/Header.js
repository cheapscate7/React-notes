import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

class Header extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {
    return (
      <Toolbar style={headerStyles.container}>
          <ToolbarBackAction
            onPress={this._goBack}
          />
          <ToolbarContent style={headerStyles.title} subtitleStyle={headerStyles.subtitle}
            title="Doodle" subtitle=" Keep"
          />
          <ToolbarAction icon="search" onPress={this._onSearch} />
          <ToolbarAction icon="more-vert" onPress={this._onMore} />
        </Toolbar>
    );
  }
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fb0',
  },
  title: {
    //fontFamily: "Roboto",
    alignItems: "baseline",
    flexDirection: "row",
  },
  subtitle: {
    fontSize: 17,
  },
  input: {
    flex: 1,
    width: 100,
    //elevation: 1,
  },
});

export default Header