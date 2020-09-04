import React from 'react'
import { View, StyleSheet } from 'react-native'

import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryList'

export default function EntrySummary({ categoriesEntry }) {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList categoriesEntry={categoriesEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
