import React from 'react';
import {SafeAreaView, View, Text, StyleSheet } from 'react-native'
import Btn from '../components/Btn';
import { Colors } from '../constatns/Color';

const EnterScreen = props=>{
    const onStartGameHandler = () => {
       props.navigation.navigate('GameScreen')
    }
    return <SafeAreaView style={styles.backgroundStyle}>
        <View>
            <Btn text='Start the Game!' onPress = {onStartGameHandler}/>
        </View>

    </SafeAreaView>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center'
      },
})

export default EnterScreen;