import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator
} from 'react-native';
import HelloWorld from './HelloWorld'
import ImageList from './ImageList'
import styles from './Styles'

class MyApp extends Component {
  render() {
    return <NavigatorIOS style={styles.container}
            initialRoute= {{
              title:'My App',
              component:ImageList
            }} />
  }
}

AppRegistry.registerComponent('ReactTesting', () => MyApp);
