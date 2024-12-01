import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <View style={{ backgroundColor: '#ee5253', width: 130, height: 50 }} />
          <View style={{ backgroundColor: '#feca57', width: 300, height: 50 }} />
          <View style={{ backgroundColor: '#1dd1a1', width: 40, height: 50 }} />
          <View style={{ backgroundColor: '#5f27cd', width: 150, height: 50 }} />
        </View>

        <View style={[styles.textRow]}>
          <Text style={styles.textItem}>Beranda</Text>
          <Text style={styles.textItem}>Video</Text>
          <Text style={styles.textItem}>Playlist</Text>
          <Text style={styles.textItem}>Komunitas</Text>
          <Text style={styles.textItem}>Channel</Text>
          <Text style={styles.textItem}>Tentang</Text>
        </View>

        <View style={styles.avatarContainer}>
          <Text style={styles.title}>Naruto</Text>
          <Text style={styles.subtitle}>informatika</Text>
          <Image
            source={require('../../assets/images/sasuke.jpg')}
            style={styles.image}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  textItem: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'right',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 14,
    color: 'gray',
  },
  avatarContainer: {
justifyContent: 'flex-end'
  },
});

export default MateriFlexBox;
