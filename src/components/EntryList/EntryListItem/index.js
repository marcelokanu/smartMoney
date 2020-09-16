import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Svg, { Rect, Circle } from 'react-native-svg'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../styles/Colors'

export default function EntryListItem({
  entry,
  isFirstItem,
  isLastItem,
  onEntryPress
}) {
  const bulletLineY = isFirstItem ? 25 : 0
  const bulletLineHeight = isLastItem ? 25 : 50
  const showBulletLine = !(isFirstItem && isLastItem)

  //const bulletColor = entry.category.color || Colors.white
  const bulletColor = Colors.white

  return (
    <TouchableOpacity
      onPress={() => {
        onEntryPress && onEntryPress(entry)
      }}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}
            <Circle
              cx="10"
              cy="25"
              r={8}
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>asd{entry.description}</Text>
          <View style={styles.details}>
            <Icon style={styles.detailsDateIcon} name="access-time" size={12} />
            <Text style={styles.detailsDateLabel}>
              {entry.entryAt.toString()}
            </Text>

            {entry.address && (
              <>
                <Icon
                  style={styles.detailsLocationIcon}
                  name="person-pin"
                  size={12}
                />
                <Text style={styles.detailsLocationLabel}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amountText}>$1230</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bullet: {},
  description: {
    flex: 1,
    marginRight: 5
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailsDateIcon: {
    color: Colors.metal,
    marginRight: 2
  },
  detailsDateLabel: {
    fontSize: 12,
    color: Colors.metal
  },
  detailsLocationIcon: {
    color: Colors.metal,
    marginRight: 2,
    marginLeft: 5
  },
  detailsLocationLabel: {
    fontSize: 12,
    color: Colors.metal
  },
  amount: {},
  amountText: {
    fontSize: 14,
    color: Colors.white
  }
})
