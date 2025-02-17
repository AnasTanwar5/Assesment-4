import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const GoalsScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    { id: 'lose', icon: 'https://i.postimg.cc/y86m0Gm3/Weight.png', text: 'I wanna lose weight.' },
    { id: 'gain', icon: 'https://i.postimg.cc/cJg8mGrC/Barbell.png', text: 'I want to gain weight.' },
    { id: 'diet', icon: 'https://i.postimg.cc/CK3nrrqN/Healthy-Food-Calories-Calculator.png', text: 'I want to change my diet.' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => console.log('Go back pressed')} // Placeholder for navigation
        >
          <Image source={{ uri: 'https://i.postimg.cc/h4rhVtpM/Go-Back.png' }} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Assessment</Text>
        <View style={styles.pageIndicator}>
          <Text style={styles.pageIndicatorText}>4 of 4</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>
          What brings you{"\n"}to Arthlete?
        </Text>

        {/* Goals Selection */}
        <View style={styles.goalsContainer}>
          {goals.map((goal) => (
            <TouchableOpacity
              key={goal.id}
              style={[styles.goalButton, selectedGoal === goal.id && styles.selectedGoal]}
              onPress={() => setSelectedGoal(goal.id)} // Set the selected goal
            >
              <View style={styles.goalContent}>
                <Image source={{ uri: goal.icon }} style={styles.icon} /> {/* Display image for each goal */}
                <Text style={styles.goalText}>{goal.text}</Text>
              </View>
              <View style={styles.checkboxContainer}>
                {selectedGoal === goal.id && (
                  <Image source={{ uri: 'https://i.ibb.co/1f9vByRq/Vector.png' }} style={styles.checkboxIcon} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity 
        style={styles.continueButton}
        onPress={() => console.log('Selected goal:', selectedGoal)} // Log the selected goal
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align to the left
    marginBottom: 40,
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    width: 50,
    height: 50,
  },
  headerTitle: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 28,
    //fontWeight: '900',
    flex: 1,
  },
  pageIndicator: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginLeft: 'auto', // Align to the right
  },
  pageIndicatorText: {
    color: 'white',
    fontSize: 14,
  },
  content: {
    flex: 1, // This allows the content to take available space
    justifyContent: 'center', // Centers content vertically
  },
  title: {
    fontFamily:'Inter_28pt-ExtraBold',
    fontSize: 40,
    //fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
    lineHeight: 45,
  },
  goalsContainer: {
    gap: 16,
  },
  goalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 12,
  },
  selectedGoal: {
    backgroundColor: '#F0F0F0',
  },
  goalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  goalText: {
    fontFamily:'Righteous-Regular',
    //fontWeight:'bold',
    fontSize: 20,
    color: '#333',
  },
  icon: {
    width: 30,
    height: 30,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  continueButton: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 30,
    marginBottom: 130,
    gap: 8,
  },
  continueButtonText: {
    fontFamily:'Righteous-Regular',
    color: 'white',
    fontSize: 20,
    //fontWeight: '900',

  },
});

export default GoalsScreen;