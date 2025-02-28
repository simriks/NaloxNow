import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/lead-bg.jpg')} // Set the background image
      style={styles.backgroundImage}
      resizeMode="cover" // Ensure the image covers the entire screen
    >
      {/* Semi-transparent blue overlay */}
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Navigation Bar */}
          <View style={styles.navbar}>
            <View style={styles.pageSwitcher}>
              <Link href="/" style={styles.pageSwitcherItem}>Home</Link>
              <Link href="/map" style={styles.pageSwitcherItem}>Map</Link>
              <Link href="/report" style={styles.pageSwitcherItem}>Report</Link>
            </View>
            {/* Logo Images on Right */}
            <View style={styles.logoContainer}>
              <Image source={require('../assets/images/NaloxNow.png')} style={styles.logo} />
              <Image source={require('../assets/images/HackCanada_Logo.png')} style={styles.logo} />
            </View>
          </View>

          {/* Main Content */}
          <Text style={styles.heading}>NALOXNOW</Text>
          <Text style={styles.subheading}>Helping Canadians combat the opioid crisis with real-time naloxone kit mapping, emergency navigation, and AI-powered overdose response.</Text>

          {/* Call-to-Action Buttons */}
          <Pressable style={styles.whiteButton}>
            <Text style={styles.whiteButtonText}>Find Naloxone Kit Near Me</Text>
          </Pressable>
          <Pressable style={styles.redButton}>
            <Text style={styles.redButtonText}>REPORT NALOXONE KITS NEAR ME</Text>
          </Pressable>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(30, 136, 229, 0.8)', // Blue tint with 80% opacity
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 0, // Removed top padding to eliminate whitespace
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // Full width
    paddingVertical: 8, // Reduced height
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 3, // Subtle shadow
  },
  pageSwitcher: {
    flexDirection: 'row',
    gap: 20,
  },
  pageSwitcherItem: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  logoContainer: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  logo: {
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 36, // Increased size for NALOXNOW
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20, // Adjusted margin to reduce whitespace
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16, // Reduced size for mobile compatibility
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    lineHeight: 22, // Adjusted line height for better readability
  },
  whiteButton: {
    backgroundColor: '#D32F2F', // Red background (switched)
    paddingVertical: 12, // Adjusted padding for mobile
    paddingHorizontal: 25, // Adjusted padding for mobile
    borderRadius: 50,
    marginTop: 30, // Increased margin to push the button down
    width: 'auto', // Width adjusts to fit the text
    alignSelf: 'center', // Center the button
  },
  whiteButtonText: {
    color: 'white', // White text (switched)
    fontSize: 16,
    fontWeight: 'bold',
  },
  redButton: {
    backgroundColor: 'white', // White background (switched)
    paddingVertical: 12, // Adjusted padding for mobile
    paddingHorizontal: 25, // Adjusted padding for mobile
    borderRadius: 5,
    marginTop: 20, // Increased margin to push the button down
    width: 'auto', // Width adjusts to fit the text
    alignSelf: 'center', // Center the button
  },
  redButtonText: {
    color: '#1E88E5', // Blue text (switched)
    fontSize: 16,
    fontWeight: 'bold',
  },
});