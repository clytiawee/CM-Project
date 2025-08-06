import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Image
        style={styles.avatar}
        resizeMode="contain"
      />
      <Text style={styles.name}>Name</Text>
      <View style={styles.menu}>
        {['Profile Settings','Notifications',].map(label => (
          <TouchableOpacity key={label} style={styles.menuItem}>
            <Text style={styles.menuText}>{label}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7FB', alignItems: 'center' },
  header: { fontWeight: 'bold', fontSize: 34, alignSelf: 'flex-start', marginLeft: 22, marginTop: 18 },
  avatar: { height: 90, width: 90, borderRadius: 70, marginTop: 14 },
  name: { fontSize: 30, fontWeight: 'bold', marginVertical: 10, marginTop: -80 },
  menu: { marginTop: 13, alignSelf: 'stretch', marginHorizontal: 20 },
  menuItem: {
    backgroundColor: '#fff', flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between', paddingVertical: 17, paddingHorizontal: 18,
    marginVertical: 5, borderRadius: 13,
  },
  menuText: { fontSize: 17, color: '#232' },
  arrow: { fontSize: 30, fontWeight: '200', color: '#bbb' },
  logout: { color: 'red', fontWeight: 'bold', fontSize: 17 },
});
