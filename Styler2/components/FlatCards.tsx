import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.header}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardRed]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  cardRed: {
    backgroundColor: '#EF5354',
  },
  cardGreen: {
    backgroundColor: '#50DBB4',
  },
  cardBlue: {
    backgroundColor: '#5DA3FA',
  },
});
