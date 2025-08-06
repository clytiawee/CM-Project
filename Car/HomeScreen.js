import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const currentBookings = [
  { name: "Basketball", amount: 2 },
  { name: "Cones", amount: 10 },
  { name: "Frisbee", amount: 1 },
  { name: "Softball", amount: 5 },
  { name: "Shuttlecock", amount: 6 }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi, User</Text>
      <View style={styles.searchRow}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.bookingsCard}>
          <Text style={styles.cardHeader}>Current Bookings</Text>
          {currentBookings.map((item) => (
            <Text style={styles.bookingItem} key={item.name}>
              • {item.name} x{item.amount}
            </Text>
          ))}
        </View>
        <TouchableOpacity style={styles.feedbackCard}>
          <Text style={styles.feedbackTitle}>Feedback</Text>
          <Text style={styles.feedbackSub}>We want your feedback!! Click here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.bookEquipCard}>
          <Text style={styles.bookEquipText}>Book Equipment</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.deadlineCard}>
        <Text style={styles.deadlineText}>No Outstanding Deadlines</Text>
      </TouchableOpacity>
    </View>
  );
}

const cardRadius = 18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: '#F7F7FB'
  },
  header: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 12
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D5E0EC',
    borderRadius: 22,
    paddingHorizontal: 16,
    marginBottom: 18
  },
  searchInput: {
    flex: 1,
    height: 38,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  searchIcon: {
    fontSize: 22,
    marginLeft: 4,
    color: '#485A7A',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'flex-start',
  },
  bookingsCard: {
    flex: 1.2,
    backgroundColor: '#2E4576',
    borderRadius: cardRadius,
    padding: 14,
    marginRight: 10,
  },
  cardHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 7
  },
  bookingItem: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 2,
  },
  feedbackCard: {
    flex: 1,
    backgroundColor: '#95B3D7',
    borderRadius: cardRadius,
    padding: 14,
    minHeight: 85,
    justifyContent: 'center'
  },
  feedbackTitle: {
    color: '#000',
    fontWeight: '800',
    fontSize: 16
  },
  feedbackSub: {
    color: '#222',
    marginTop: 2,
    fontSize: 13
  },
  bookEquipCard: {
    flex: 1,
    backgroundColor: '#C8D2DC',
    borderRadius: cardRadius,
    padding: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookEquipText: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#202124'
  },
  deadlineCard: {
    width: '100%',
    marginTop: 16,
    backgroundColor: '#95B3D7',
    borderRadius: cardRadius,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deadlineText: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#222',
  }
});
