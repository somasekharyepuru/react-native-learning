import {Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActivityCard() {
  const openWebsite = (url: string): void => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Text style={styles.header}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>What's new in JS 12</Text>
        </View>
        <Image
          source={{
            uri: 'https://placehold.co/600x400/png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardDescription} numberOfLines={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.socialLinks} onPress={() => openWebsite('https://www.google.com')}>
            <Text>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLinks} onPress={() => openWebsite('https://twitter.com')}>
            <Text>Follow</Text>
          </TouchableOpacity>
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
    borderRadius: 8,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 4,
  },
  cardHeader: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardImage: {
    height: 150,
    marginBottom: 8,
  },
  cardBody: {
    padding: 8,
  },
  cardDescription: {
    fontSize: 14,
  },
  cardFooter: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialLinks: {
    alignItems: 'center',
    backgroundColor: '#90CAF9',
    padding: 10,
    borderRadius: 4,
  },
});
