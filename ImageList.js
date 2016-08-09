import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import ImageCell from './ImageCell'

export default class ImageList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8'
      ])
    };
  }

  render() {
    return (
      <ListView dataSource={this.state.dataSource}
      renderRow={(rowData) => <ImageCell /> }
      style={imageList.list} />
    );
  }
}

const imageList = StyleSheet.create({
  list: {
    padding: 10,
    flex: 1
  }
});
