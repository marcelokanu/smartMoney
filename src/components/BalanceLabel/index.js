import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BalanceLabel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>$2.102,45</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  label: {
    fontSize: 18
  },
  value: {
    fontSize: 22
  }
})
