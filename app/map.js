// app/MapScreen.js
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function MapScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        {/* Page Switcher */}
        <View style={styles.pageSwitcher}>
          <Link href="/map" style={styles.pageSwitcherItem}>Map</Link>
          <Link href="/report" style={styles.pageSwitcherItem}>Report</Link>
        </View>

        {/* Logo Container */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/NaloxNow.png')} style={styles.logo} />
          <Image source={require('../assets/images/HackCanada_Logo.png')} style={styles.logo} />
        </View>
      </View>

      {/* Main Content */}
      <Text style={styles.heading}>Find Naloxone Kit Near Me</Text>
      <View style={styles.mapContainer}>
        <Image source={require('../assets/images/map.png')} style={styles.mapImage} />
        <Image source={require('../assets/images/Location.png')} style={styles.locationIcon} />
      </View>
      <Pressable style={styles.startDirectionsBtn}>
        <Text style={styles.buttonText}>Start Directions</Text>
      </Pressable>
      <Pressable style={styles.goBackBtn}>
        <Text style={styles.buttonText}>Go Back to Main Page</Text>
      </Pressable>

      {/* Get in Touch Section */}
      <View style={styles.contactSection}>
        <Text style={styles.heading}>Get in Touch</Text>
        <View style={styles.contactForm}>
          <Text style={styles.label}>Your Email</Text>
          <TextInput style={styles.input} placeholder="Your email" keyboardType="email-address" />
          <Text style={styles.label}>Your Message</Text>
          <TextInput style={styles.textarea} placeholder="Your message" multiline />
          <Pressable style={styles.sendButton}>
            <Text style={styles.buttonText}>Send</Text>
          </Pressable>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.copyright}>Copyright © 2025 NaloxNow</Text>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f9f9f9', // White bar background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  pageSwitcher: {
    flexDirection: 'row',
    gap: 15,
  },
  pageSwitcherItem: {
    fontSize: 16,
    color: '#007bff', // Blue text
    textDecorationLine: 'underline',
  },
  logoContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  locationIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  startDirectionsBtn: {
    backgroundColor: '#4CAF50', // Green background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  goBackBtn: {
    backgroundColor: '#3498db', // Blue background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16,
    textAlign: 'center',
  },
  contactSection: {
    width: '100%',
    marginTop: 20,
  },
  contactForm: {
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 100,
  },
  sendButton: {
    backgroundColor: '#007bff', // Blue background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  copyright: {
    fontSize: 12,
    color: '#666',
  },
});