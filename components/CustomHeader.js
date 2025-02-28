// components/CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet, Link } from 'expo-router';

export default function CustomHeader() {
  return (
    <View style={styles.header}>
      {/* Page Switcher */}
      <View style={styles.pageSwitcher}>
        <Link href="/" style={styles.pageSwitcherItem}>Home</Link>
        <Link href="/map" style={styles.pageSwitcherItem}>Map</Link>
        <Link href="/report" style={styles.pageSwitcherItem}>Report</Link>
      </View>

      {/* Logo Container */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/NaloxNow.png')} style={styles.logo} />
        <Image source={require('../assets/images/HackCanada_Logo.png')} style={styles.logo} />
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
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
});