import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const items = [
  { id: '1', name: 'Basketball', stock: 10,  },
  { id: '2', name: 'Football', stock: 25,  },
  { id: '3', name: 'Badminton Racket', stock: 5, },
  { id: '4', name: 'Frisbee', stock: 1, },
];

export default function BookingScreen() {
  const [search, setSearch] = useState('');
  const filtered = items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking</Text>
      <View style={styles.searchRow}>
        <TextInput
          placeholder="Search items"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.cardImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardStock}>Stock: {item.stock}</Text>
            </View>
            {item.stock === 1 && (
              <View style={styles.leftBadge}>
                <Text style={styles.leftText}>1 Left!!</Text>
              </View>
            )}
            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookBtnText}>Book</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        style={{ marginTop: 6 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
    padding: 22,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 7,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D5E0EC',
    borderRadius: 18,
    paddingHorizontal: 17,
    marginBottom: 16,
    height: 46,
  },
  searchInput: {
    flex: 1,
    height: 36,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  searchIcon: {
    fontSize: 22,
    marginLeft: 4,
    color: '#485A7A',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#EAF0F6',
    borderRadius: 16,
    alignItems: 'center',
    padding: 11,
    gap: 8
  },
  cardImage: {
    height: 50,
    width: 70,
    borderRadius: 9,
    marginRight: 13,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#C8D2DC',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222',
  },
  cardStock: {
    fontSize: 15,
    color: '#444',
    marginTop: 1
  },
  bookBtn: {
    backgroundColor: '#95B3D7',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
    alignSelf: 'center',
  },
  bookBtnText: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 16,
  },
  leftBadge: {
    backgroundColor: '#D5E0EC',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: 'center',
    marginRight: 8,
    marginLeft: 2
  },
  leftText: {
    color: '#194077',
    fontWeight: 'bold',
    fontSize: 13
  }
});
