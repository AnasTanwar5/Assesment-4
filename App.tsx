//assessment 2




import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const DietPreferenceScreen = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    { id: 1, title: 'Vegitarian', description: 'Veggies, fruits, etc..', icon: '🥝' },
    { id: 2, title: 'Vegan', description: 'Plant based diet', icon: '🌻' },
    { id: 3, title: 'Keto', description: 'Chicken, etc', icon: '🍗' },
    { id: 4, title: 'Gluten-free', description: 'Rice, quinoa, etc..', icon: '🍚' },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} onPress={() => console.log('Go Back pressed')}>
          <Image source={{ uri: 'https://i.postimg.cc/h4rhVtpM/Go-Back.png' }} style={styles.goBackIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Assessment</Text>
        <View style={styles.stepBox}>
          <Text style={styles.stepText}>2 of 4</Text>
        </View>
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Any Specific </Text>
        <Text style={styles.title}>Diet Preference?</Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionBox,
              selected === option.id && styles.selectedOptionBox,
            ]}
            onPress={() => setSelected(option.id)}
          >
            <Text
              style={[
                styles.optionIcon,
                selected === option.id && styles.selectedOptionText,
              ]}
            >
              {option.icon}
            </Text>
            <Text
              style={[
                styles.optionTitle,
                selected === option.id && styles.selectedOptionText,
              ]}
            >
              {option.title}
            </Text>
            <Text
              style={[
                styles.optionDescription,
                selected === option.id && styles.selectedOptionText,
              ]}
            >
              {option.description}
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
    backgroundColor: '#F9F9F9',
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
    width: 50,
    height: 50,
  },
  headerText: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 28,
    //fontWeight: '900',
    flex: 1, 
    //textAlign: 'center',
  },
  stepBox: {
    backgroundColor: '#E06714',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  stepText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
  titleSection: {
    //marginTop: 5,
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 35,
    //fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  },
  optionBox: {
    width: '45%',
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 5,
    marginBottom: 15,
  },
  selectedOptionBox: {
    backgroundColor: '#E06714',
    // shadowColor: '#E06714',
    // shadowOpacity: 0.4,
    // elevation: 10,
  },
  optionIcon: {
    fontSize: 30,
    marginBottom: 10,
    color: '#000',
  },
  optionTitle: {
    fontFamily:'Righteous-Regular',
    fontSize: 23,
    //fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  optionDescription: 
  {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  selectedOptionText: {
    color: '#FFF', // Changes font color to white for selected options
  },
  continueButton: {
    marginTop: 65,
    
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    fontFamily:'Righteous-Regular',
    color: 'white',
    fontSize: 20,
    //fontWeight: '900',
  },
});

export default DietPreferenceScreen;
