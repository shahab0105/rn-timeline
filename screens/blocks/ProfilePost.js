import React from 'react';
import {View, Text} from 'react-native';

class ProfilePost extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'green', flex: 1 / 4, marginBottom: 5}}>
        <Text> Text Post</Text>
      </View>
    );
  }
}

export default ProfilePost;
