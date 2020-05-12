import React from 'react';
// import {View,Text} from 'react-native';
import Jumbotron from './blocks/Jumbotron';
import ProfilePost from './blocks/ProfilePost';
import ProfileMediaPost from './blocks/profileMediaPost';
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
      //   <ScrollView>
      <View
        style={{flex: 1, backgroundColor: 'yellow', flexDirection: 'column'}}>
        <Jumbotron />
        <View id="Feed" style={{flex: 3, backgroundColor: 'red'}}>
          <View id="postArea" style={{flex: 1}}>
            <ProfilePost />
            <ProfileMediaPost />
            <ProfilePost />
          </View>
        </View>
      </View>
      //   </ScrollView>
    );
  }
}

export default TimeLine;
