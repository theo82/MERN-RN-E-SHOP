import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import Icon from 'react-native';

var { width } = Dimensions.get('window');

const ListItem = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={{
            uri: props.Image
              ? props.Image
              : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
          }}
          resizeMode='contain'
        />
        <Text>{props.brand}</Text>
        <Text numberOfLines={1} ellipsizeMode='tail'>
          {props.name}
        </Text>
        <Text numberOfLines={1} ellipsizeMode='tail'>
          {props.category.name}
        </Text>
        <Text>{props.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
