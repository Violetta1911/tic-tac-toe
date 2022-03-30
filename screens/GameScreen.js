import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';

import Cell from '../components/Cell';
import Btn from '../components/Btn';
import {Colors} from '../constatns/Color';
import {findWinner} from '../components/helper';

const GameScreen = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentPlayer, setCurrentPlayer] = useState('x');
  const [stepNumber, setStepNumber] = useState(0);

  const winner = findWinner(history[0]);

  const onResetHandler = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentPlayer('x');
    setStepNumber(0);
  };

  const onNextStepHandler = key => {
    if (stepNumber === 9 || winner) {
      setStepNumber(0);
      return;
    }
    setStepNumber(stepNumber + 1);

    history[0][key] = currentPlayer;

    currentPlayer == 'x' ? setCurrentPlayer('0') : setCurrentPlayer('x');
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.player}>
          <Text
            style={{
              color: winner ? '#afeeee' : 'white',
              fontSize: 18,
              textAlignVertical: 'center',
            }}>
            Player{' '}
            <Text style={{color: winner ? '#afeeee' : 'white', fontSize: 24}}>
              {winner ? winner : currentPlayer}
            </Text>{' '}
            {winner && (
              <Text style={{color: '#afeeee', fontSize: 18}}>
                {' '}
                is a WINNER!!!
              </Text>
            )}
          </Text>
        </View>
        <View style={styles.cells}>
          {history[0].map((cell, i) => (
            <Cell key={i} text={cell} onTouch={() => onNextStepHandler(i)} />
          ))}
        </View>
        {stepNumber == 9 || winner ? (
          <Btn text="Once more?" onPress={onResetHandler} color={'green'} />
        ) : (
          <Btn text="Reset" onPress={onResetHandler} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  player: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
    marginTop: 20,
  },
  cells: {
    width: 225,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 75,
  },
  cellsLines: {
    flexDirection: 'row',
  },
});

export default GameScreen;
