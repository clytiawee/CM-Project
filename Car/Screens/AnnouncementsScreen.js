import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const announcements = [
  {}, {}, {}, {}, {}
];

export default function AnnouncementsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Announcements</Text>
      <FlatList
        data={announcements}
        renderItem={() => (
          <View style={styles.row}>
            <Icon name="info" size={33} color="#222" style={{ margin: 15 }} />
            <View style={styles.line} />
          </View>
        )}
        keyExtractor={(_, i) => String(i)}
        ItemSeparatorComponent={() => <View style={styles.spacer}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7FB', paddingHorizontal: 22 },
  header: { fontSize: 34, fontWeight: 'bold', marginVertical: 16 },
  row: { flexDirection: 'row', alignItems: 'center' },
  line: {
    height: 1,
    backgroundColor: '#BCCCDC',
    flex: 1,
    marginLeft: 10,
  },
  spacer: { height: 22 },
});
