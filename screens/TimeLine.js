import React from 'react';
// import {View,Text} from 'react-native';
import Jumbotron from './blocks/Jumbotron';
import ProfilePost from './blocks/ProfilePost';
import ProfileMediaPost from './blocks/profileMediaPost';
import timelineStyles from './styles/timeline';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  // ScrollView
} from 'react-native';

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    state = {};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={timelineStyles.scrollView}>
        <View id="mainContainer" style={timelineStyles.mainContainer}>
          <Jumbotron />
          {/* <ScrollView style={{flexGrow: 3, backgroundColor: 'pink'}}> */}
          <View id="feedArea" style={timelineStyles.feedArea}>
            <View id="postArea" style={timelineStyles.postArea}>
              <ProfilePost />
              <ProfileMediaPost />
              <ProfilePost />
            </View>
          </View>
          {/* </ScrollView> */}
        </View>
      </ScrollView>
    );
  }
}

export default TimeLine;
