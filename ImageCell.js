import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ImageCell extends Component {
  render() {
    return (
      <View style={imageStyle.imageCell}>
        <Image source={{uri: 'https://unsplash.it/300/?random&random_number=' + new Date().getTime()}} style={imageStyle.image}/>
      </View>
    );
  }
}

const imageStyle = StyleSheet.create({
  imageCell: {
    padding: 10,
    flex: 1,
    height: 200,
    backgroundColor: '#f6f6f6',
    borderColor: '#c9c9c9',
    borderWidth: 1,
    marginBottom: 10
  },
  image: {
    flex: 1
  }
});
