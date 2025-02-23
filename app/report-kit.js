// app/report-kit.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReportKitScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report a Kit</Text>
      <Text>Form to report a kit goes here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff3e0', // Light orange background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#e65100', // Orange text
  },
});