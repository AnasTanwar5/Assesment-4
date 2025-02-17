//assessment 1



import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Image } from 'react-native';

const FrequencyScreen = () => {
  const [selected, setSelected] = useState(5);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} onPress={() => console.log('Go Back pressed')}>
          <Image source={{ uri: 'https://i.postimg.cc/h4rhVtpM/Go-Back.png' }} style={styles.goBackIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assessment</Text>
        <View style={styles.stepContainer}>
          <Text style={styles.stepText}>1 of 4</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>How many days a week{"\n"}will you commit</Text>

        {/* Frequency Display */}
        <Text style={styles.frequencyNumber}>{selected}x</Text>

        {/* Number Selection */}
        <View style={styles.numberContainer}>
          {[1, 2, 3, 4, 5].map((number) => (
            <Pressable
              key={number}
              style={[styles.numberButton, selected === number && styles.selectedNumber]}
              onPress={() => setSelected(number)}
            >
              <Text style={[styles.numberText, selected === number && styles.selectedNumberText]}>
                {number}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.commitmentText}>
          I&apos;m committed to exercising {selected}x weekly
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => console.log('Continue button pressed. No navigation action.')}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  goBackButton: {
    marginRight: 10, // Space between the icon and the title
  },
  goBackIcon: {
    width: 50,
    height: 50,
  },
  headerTitle: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 28,
    //fontWeight: '900',
    flex: 1, 
    //textAlign: 'center',
  },
  stepContainer: {
    backgroundColor: '#E06714',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  stepText: {
    color: 'white',
    fontSize: 14,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 35,
    //fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 40,
    color: '#333',
  },
  frequencyNumber: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 180,
    //fontWeight: 'bold',
    marginBottom: 30,
    color: '#000000',
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
    color:'#E5E5E5',
  },
  numberButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedNumber: {
    backgroundColor: '#FF6B00',
  },
  numberText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
  },
  selectedNumberText: {
    color: 'white',
  },
  commitmentText: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 16,
    color: '#555',
    marginTop: 5,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    marginBottom: 150,
  },
  continueButtonText: {
    fontFamily:'Righteous-Regular',
    color: 'white',
    fontSize: 20,
    //fontWeight: '900',
  },
});

export default FrequencyScreen;
