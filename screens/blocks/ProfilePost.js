import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/blockstyles/profilePost';
class ProfilePost extends React.Component {
  render() {
    return (
      <View id="postContainer" style={styles.postContainer}>
        <View id="row1" style={styles.row1}>
          <View id="dpPreview" style={styles.dpPreview}>
            <Image
              source={require('../res/dp.jpg')}
              id="dpPreviewImg"
              style={styles.dpPreviewImg}
            />
          </View>
          <View style={styles.profileTitle} id="profileTitle">
            <Text>Shahab Uddin</Text>
          </View>
        </View>
        <View id="row2" style={styles.row2}>
          <Text>
            Text Post Text Post Text PostText PostText Post Text Post Text
            PostText PostText Post Text PostText Post Text PostText Post
          </Text>
        </View>
      </View>
    );
  }
}

export default ProfilePost;
