// app/_layout.js
import React from 'react';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="map" options={{ title: 'Map' }} />
      <Tabs.Screen name="report-kit" options={{ title: 'Report Kit' }} />
      <Tabs.Screen name="chatbot" options={{ title: 'Chatbot' }} />
    </Tabs>
  );
}