import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import ImageList from './ImageList'
import styles from './Styles'

class MyApp extends Component {
  render() {
    return <Navigator
            initialRoute= {{
              title:'My App',
              index:0
            }}
            renderScene={(route, navigator) => <ImageList />}
            style={styles.container}
             />
  }
}

AppRegistry.registerComponent('ReactTesting', () => MyApp);
