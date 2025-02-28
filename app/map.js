import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Link } from 'expo-router';

export default function MapScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        {/* Page Switcher */}
        <View style={styles.pageSwitcher}>
          <Link href="/map" style={styles.pageSwitcherItem}>Map</Link>
          <Link href="/report-kit" style={styles.pageSwitcherItem}>Report Kit</Link>
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
        {/* Map Image (Background) */}
        <Image source={require('../assets/images/map.png')} style={styles.mapImage} />
        {/* Location Icon (Overlay) */}
        <Image source={require('../assets/images/Location.png')} style={styles.locationIcon} />
      </View>
      <Pressable style={styles.startDirectionsBtn} onPress={() => {
        // Add functionality for starting directions here
        console.log("Start Directions clicked");
      }}>
        <Text style={styles.buttonText}>Start Directions</Text>
      </Pressable>
      <Link href="/" asChild>
        <Pressable style={styles.goBackBtn}>
          <Text style={styles.buttonText}>Go Back to Main Page</Text>
        </Pressable>
      </Link>

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

// Define the styles object
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
    width: '100%', // Ensure the container takes full width
    alignItems: 'center', // Center the map and location icon
  },
  mapImage: {
    width: '90%', // Reduced width to make the map smaller
    height: 400, // Reduced height to make the map smaller
    resizeMode: 'cover', // Ensure the map covers the area
  },
  locationIcon: {
    position: 'absolute',
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // Adjusted for larger icon size
    width: 100, // Increased size of the location icon (2x bigger)
    height: 100, // Increased size of the location icon (2x bigger)
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