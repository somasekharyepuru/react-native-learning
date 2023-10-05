import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface ContactCardProps {
  uid: number;
  name: string;
  status: string;
  imageUrl: string;
}

export default function ContactCard({uid, name, status, imageUrl}: PropsWithChildren<ContactCardProps>) {
  return (
    <View key={uid} style={styles.userCard}>
      <Image source={{uri: imageUrl}} style={styles.userImage} />
      <View>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userStatus}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#4DD0E1',
    elevation: 4,
    borderRadius: 8,
    padding: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 12,
  },
});
