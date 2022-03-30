import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Colors} from '../constatns/Color';

const Btn = props => {
  return (
    <Pressable style={[styles.button,  {backgroundColor: props.color ? props.color : Colors.white}]} onPress={props.onPress}>
      <Text style={{color: props.color ? 'white' : Colors.blue}}>{props.text.toUpperCase()}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    borderColor: Colors.blue,
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Btn;
