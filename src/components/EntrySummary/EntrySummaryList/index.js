import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

export default function EntrySummaryList({ categoriesEntry }) {
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={categoriesEntry}
        renderItem={({ item }) => (
          <Text>
            {item.description} - {item.amount}
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  }
})
