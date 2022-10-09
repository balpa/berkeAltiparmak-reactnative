import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface propTypes {
  filterName: string,
  isSelected: boolean
}

const FilterMenuItem = ({ filterName }: propTypes) => {
  return (
    <TouchableOpacity
      style={styles.container}
    >
      <Text
        style={styles.filterMenuItemText}>
        {filterName}
      </Text>
    </TouchableOpacity>
  )
}

export default FilterMenuItem

const styles = StyleSheet.create({
  container: {
    height: 40,
    margin: 10,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10
  },
  filterMenuItemText: {
    fontSize: 16,
    color: 'white'
  }
})