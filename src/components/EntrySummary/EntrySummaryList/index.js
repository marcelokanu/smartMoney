import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function EntrySummaryList({ categoriesEntry }) {
  return (
    <View>
      <FlatList
        data={categoriesEntry}
        renderItem={({ item }) => (
          <Text>
            {item.description} - {item.amount}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
