import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../../../styles/Colors'

export default function BalancePanelLabel({ currentBalance }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center'
  },
  label: {
    color: Colors.white,
    fontSize: 14
  },
  value: {
    color: Colors.white,
    fontSize: 36
  }
})
