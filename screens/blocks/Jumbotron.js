import React from 'react';

import {View, Text} from 'react-native';
import styles from '../styles/blockstyles/jumbotoron';
class Jumbotron extends React.Component {
  render() {
    return (
      <View id="Jumbotron" style={styles.jumbotron}>
        <View id="dpView" style={styles.dpView} />
      </View>
    );
  }
}

export default Jumbotron;
