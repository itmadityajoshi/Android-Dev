import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headerText}> FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>

        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardFive]}>
          <Text>Card 5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 4,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'gold',
  },
  cardFive: {
    backgroundColor: 'gray',
  },
});
