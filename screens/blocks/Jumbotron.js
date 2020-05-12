import React from 'react';

import {View, Text} from 'react-native';

class Jumbotron extends React.Component {
  render() {
    return (
      <View
        id="Jumbotron"
        style={{
          backgroundColor: 'blue',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 50,
        }}>
        <View
          id="dp"
          style={{backgroundColor: 'yellow', flex: 1 / 3, marginVertical: 10}}
        />
      </View>
    );
  }
}

export default Jumbotron;
