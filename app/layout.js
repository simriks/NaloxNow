// app/_layout.js
import React from 'react';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hide the default header
        tabBarStyle: {
          paddingTop: 10, // Adjust tab bar padding if needed
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarLabel: 'Home' }} />
      <Tabs.Screen name="map" options={{ title: 'Map', tabBarLabel: 'Map' }} />
      <Tabs.Screen name="report-kit" options={{ title: 'Report Kit', tabBarLabel: 'Report Kit' }} />
      <Tabs.Screen name="chatbot" options={{ title: 'Chatbot', tabBarLabel: 'Chatbot' }} />
    </Tabs>
  );
}