import React from 'react';

import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../styles/blockstyles/jumbotoron';
class Jumbotron extends React.Component {
  render() {
    return (
      <View id="Jumbotron" style={styles.jumbotron}>
        <View id="dpDetailContainer" style={styles.dpDetailContainer}>
          <ImageBackground
            id="dpView"
            source={require('../res/dp.jpg')}
            style={styles.dpView}>
            <TouchableOpacity id="editButton" style={styles.editButton}>
              {/* <Text style->Upload Picture</Text> */}
            </TouchableOpacity>
          </ImageBackground>
          <View id="row2" style={styles.row2}>
            <Text>Shahab Uddin</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Jumbotron;
