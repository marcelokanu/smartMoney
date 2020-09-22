import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import Colors from '../../styles/Colors'

export default function BalanceLabel() {
  const currentBalance = 2000.35
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  label: {
    fontSize: 12,
    color: Colors.white
  },
  value: {
    fontSize: 28,
    color: Colors.white
  },
  panel: {
    borderRadius: 10,
    paddingHorizontal: 35,
    paddingVertical: 10,
    marginVertical: 10
  }
})
