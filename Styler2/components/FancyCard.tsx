import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.header}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://placehold.co/600x400/png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>PlaceHolder</Text>
          <Text style={styles.cardLabel}>Label</Text>
          <Text style={styles.cardDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </Text>
          <Text style={styles.cardFooter}>PlaceHolder</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 360,
    marginHorizontal: 12,
    marginVertical: 16,
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    padding: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {},
});
