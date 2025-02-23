import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        {/* Navigation Links */}
        <View style={styles.navbar}>
          <Link href="/about" style={styles.navItem}>About</Link>
          <Link href="/features" style={styles.navItem}>Features</Link>
          <Link href="/download" style={styles.navItem}>Download</Link>
          <Link href="/contact" style={styles.navItem}>Contact</Link>
        </View>
      </View>

      {/* Main Content */}
      <Text style={styles.heading}>NALOXNOW</Text>
      <Text style={styles.subheading}>
        Helping Canadians combat the opioid crisis with real-time naloxone kit mapping, emergency navigation, and AI-powered overdose response.
      </Text>

      {/* Call-to-Action Buttons */}
      <Pressable style={styles.findButton}>
        <Text style={styles.buttonText}>Find Naloxone Kit Near Me</Text>
      </Pressable>
      <Pressable style={styles.reportButton}>
        <Text style={styles.buttonText}>REPORT NALOXONE KITS NEAR ME</Text>
      </Pressable>

      {/* Footer */}
      <View style={styles.footer}>
        <Image source={require('../assets/images/NaloxNow.png')} style={styles.logo} />
        <Image source={require('../assets/images/HackCanada_Logo.png')} style={styles.logo} />
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#1E88E5', // Blue background
    padding: 20,
  },
  header: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    gap: 20,
  },
  navItem: {
    fontSize: 16,
    color: '#fff', // White text
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  findButton: {
    backgroundColor: '#fff', // White background for the blue button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  reportButton: {
    backgroundColor: '#D32F2F', // Red background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000', // Black text for contrast
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});
