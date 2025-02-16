//New Onboarding 2



import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const DietScreen = () => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={() => {}} activeOpacity={0.9}>
      <ImageBackground
        source={{ uri: 'https://i.ibb.co/FqY8Ky7k/food-1898194-1280-1.png' }} // Updated Image
        style={styles.background}
        resizeMode="cover" // Fix Stretching Issue
      >
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              <Text style={styles.whiteText}>YOUR </Text>
              <Text style={styles.highlight}>DIET</Text>
            </Text>
            <Text style={styles.title}>
              <Text style={styles.whiteText}>YOUR </Text>
              <Text style={styles.highlight}>RESULTS</Text>
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
    backgroundColor: '#EEAB7C',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 26,
    alignItems: 'center',
    width: 429, // Adjust width to fit better
    height:175,
    borderBottomRightRadius: 40, 
  },
  title: {
    fontSize: 34,
    fontFamily: 'Bungee-Regular', // Ensure font is correctly linked
   // fontWeight: 'bold',
    textTransform: 'uppercase',
    lineHeight: 75,
   
  },
  whiteText: {
    color: 'white',
    //fontWeight: 'bold',
  },
  // greyText: {
  //   color: '#B24A02', // Grey color for "DIET"
  //   //fontWeight: 'bold',
  // },
  highlight: {
    color: '#B24A02',
    textShadowColor: 'white', // White border
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    //marginTop:3,
  },

  // orangeText: {
  //   color: '#B24A02', // Dark bold text for "RESULTS"
  //   //fontWeight: 'bold',
  // },
});

export default DietScreen;
