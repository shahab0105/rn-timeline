import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/blockstyles/profilePost';
class ProfilePost extends React.Component {
  render() {
    return (
      <View id="postContainer" style={styles.postContainer}>
        <Text> Text Post</Text>
      </View>
    );
  }
}

export default ProfilePost;
