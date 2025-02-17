//assessment 3



import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const ActivityLevelScreen = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const options = ['Beginner', 'Intermediate', 'Advance'];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} onPress={() => console.log('Go Back pressed')}>
          <Image source={{ uri: 'https://i.ibb.co/Jj2dyfGD/image-removebg-preview.png' }} style={styles.goBackIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Assessment</Text>
        <View style={styles.stepBox}>
          <Text style={styles.stepText}>3 of 4</Text>
        </View>
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>What is your Physical Activity Level?</Text>
        <Text style={styles.subtitle}>
          Tell us about your daily activity level to personalize your fitness and health plan.
        </Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selected === option && styles.selectedOptionButton,
            ]}
            onPress={() => setSelected(option)}
          >
            <Text
              style={[
                styles.optionText,
                selected === option && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goBackButton: {
    marginRight: 10,
  },
  goBackIcon: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 25,
    //fontWeight: '900',
    flex: 1,
    paddingLeft:10,
    //textAlign: 'center',
  },
  stepBox: {
    backgroundColor: '#E06714',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20, // Step box corner radius
  },
  stepText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
  titleSection: {
    //marginTop: 100,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 36,
    //fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  optionsContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    width: '80%',
    backgroundColor: '#F6E1D3',
    borderRadius: 30, // Option buttons corner radius
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 20,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    //elevation: 3,
  },
  selectedOptionButton: {
     backgroundColor: '#E06714',
    // shadowColor: '#E06714',
    // shadowOpacity: 0.3,
    //elevation: 5,
  },
  optionText: {
    fontFamily:'Righteous-Regular',
    fontSize: 18,
    color: '#E06714',
    //fontWeight: 'bold',
  },
  selectedOptionText: {
    color: '#FFF', // White text for selected options
  },
  continueButton: {
    marginTop: 65,
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30, // Continue button corner radius
    alignItems: 'center',
  },
  continueButtonText: {
    fontFamily:'Righteous-Regular',
    color: 'white',
    fontSize: 20,
    //fontWeight: '900',
  },
});

export default ActivityLevelScreen;
