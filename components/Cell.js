import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable
} from 'react-native';
import { Colors } from '../constatns/Color';

const Cell = ({onTouch, text}) => {
  return (
      <Pressable style = {styles.button}
       onPress={onTouch}><Text style ={{fontSize: 24, color: Colors.blue}}>{text}</Text></Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 75,
    height: 75,
    borderColor: Colors.blue,
    borderWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    color: Colors.blue
  },
});

export default Cell;
