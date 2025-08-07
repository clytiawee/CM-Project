import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {navigation.replace('MainTabs');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.header}>Welcome Back!</Text>

      <View style={styles.inputCard}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupRow}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <Text style={[styles.signupText, { fontWeight: 'bold', color: '#2255a4' }]}>
          Sign up
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const cardRadius = 18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 26,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  subHeader: {
    fontSize: 17,
    color: '#395393',
    marginBottom: 24,
  },
  inputCard: {
    width: '100%',
    backgroundColor: '#EAF0F6',
    borderRadius: cardRadius,
    padding: 20,
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 15,
    color: '#2E4576',
    marginTop: 8,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 11,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#C8D2DC',
  },
  loginBtn: {
    backgroundColor: '#2E4576',
    borderRadius: cardRadius,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: 'center',
    marginBottom: 18,
    width: '100%',
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  signupRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  signupText: {
    color: '#3C4D68',
    fontSize: 15,
  },
});
