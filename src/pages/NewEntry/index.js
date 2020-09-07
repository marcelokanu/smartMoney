import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel'
import { saveEntry } from '../../services/Entries'

export default function NewEntry({ navigation }) {
  const currentBalance = 2064.35

  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date()
  })

  const [amount, setAmount] = useState(`${entry.amount}`)

  const save = () => {
    const data = {
      amount: parseFloat(amount)
    }

    saveEntry(data, entry)
  }

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAmount(text)}
          value={amount}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={save} />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  input: {
    borderColor: '#000',
    borderWidth: 1
  }
})
