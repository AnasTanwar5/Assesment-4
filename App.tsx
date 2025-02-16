




//New Onboarding 1


import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const WorkoutScreen = () => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={() => {}} activeOpacity={0.9}>
      <ImageBackground
        source={{ uri: 'https://i.ibb.co/v4nFht8h/workout-image.png' }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.title}> <Text>A </Text>
              <Text style={styles.highlight}>WORKOUT </Text>
            </Text>
            <Text style={styles.subtitle}>FOR EVERY                                     GOAL...</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderBottomRightRadius: 40, // Adjust corner radius
  },
  title: {
    fontSize: 40, // Slightly reduced for better fit
    fontFamily: 'Bungee-Regular',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 30,
    color:'white',
   marginTop:3,
  },
  highlight: {
    color: '#B24A02',
    textShadowColor: 'white', // White border
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    //marginTop:3,
  },
  subtitle: {
    fontSize: 40,
    fontFamily: 'Bungee-Regular',
    textAlign: 'center',
    color: 'white',
    
    //marginTop: 5,
    
  },
  whiteText: {
    color: 'white',
  },
});

export default WorkoutScreen;
