// app/chatbot.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatbotScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chatbot</Text>
      <Text>Chatbot interface goes here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ede7f6', // Light purple background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#6a1b9a', // Purple text
  },
});