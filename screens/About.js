import React from 'react';
import {View, Text, Button} from 'react-native';
class About extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.props.navigation.navigate('home');
          }}
          title="home to">
          Home
        </Button>
        <Text>I aint telling shit, fuck off</Text>
      </View>
    );
  }
}

export default About;
