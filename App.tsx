import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const DietScreen = () => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={() => {}} activeOpacity={0.9}>
      <ImageBackground
        source={{ uri: 'https://i.ibb.co/7ts8HStj/woman-7539138-640-1.png' }} // Updated Image
        style={styles.background}
        resizeMode="cover" // Fix Stretching Issue
      >
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              <Text style={styles.whiteText}>PERSONALIZED </Text>
            </Text>
            <Text style={styles.title}>
              <Text style={styles.orangeText}>FITNESS </Text>
              <Text style={styles.whiteText}>PLANS</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%', // Ensures full width
    height: '100%', // Ensures full height
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    backgroundColor: '#EEAB7C', // Set background color as per the provided image
    paddingVertical: 44,
    paddingHorizontal: 50,
    borderRadius: 26,
    alignItems: 'center',
    width: '106%',
    borderEndEndRadius:40,

  },
  title: {
    fontSize: 40,
    fontFamily: 'Bungee-Regular', // Ensure font is correctly linked
    textTransform: 'uppercase',
    lineHeight: 50,
    
    
  },
  orangeText: {
    color: '#B24A02', // Dark bold text for "RESULTS"
    textShadowColor: 'white', // White border color
    textShadowOffset: { width: 2, height: 2 }, // Border thickness
    textShadowRadius: 2, // Border blur effect
  },
  whiteText: {
    color: 'white',
  },
});

export default DietScreen;
