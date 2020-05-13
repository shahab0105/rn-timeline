import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/blockstyles/profileMediaPost';
class ProfileMediaPost extends React.Component {
  render() {
    return (
      <View id="mediaPostContainer" style={styles.mediaPostContainer}>
        <Text> Video/Image Content</Text>
      </View>
    );
  }
}

export default ProfileMediaPost;
