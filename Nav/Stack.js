import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import About from '../screens/About';
import NewsFeed from '../screens/NewsFeed';
import TimeLine from '../screens/TimeLine';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Text>Say Hello to Big Boys 2</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

class Router extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="timeline" component={TimeLine} />
          <Tab.Screen name="newsfeed" component={NewsFeed} />
          <Tab.Screen name="about" component={About} />
          <Tab.Screen name="home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default Router;
