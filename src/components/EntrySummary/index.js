import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../styles/Colors'

import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryList'

export default function EntrySummary({ categoriesEntry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <EntrySummaryChart />
      <EntrySummaryList categoriesEntry={categoriesEntry} />
      <View style={styles.actionContainer}>
        <Text style={styles.actionLabel}>Últimos 7 dias</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="insert-chart" style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>Ver mais...</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    backgroundColor: Colors.asphalt,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    margin: 5,
    padding: 8
  },
  title: {
    fontSize: 15,
    marginBottom: 5,
    color: Colors.white
  },
  actionContainer: {
    flexDirection: 'row'
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.white
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButtonIcon: {
    color: Colors.white,
    fontSize: 18,
    flexDirection: 'row',
    marginRight: 2
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white
  }
})
