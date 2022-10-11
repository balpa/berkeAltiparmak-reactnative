import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

interface propTypes {
  filterName: string,
  filter: string,
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>
}

const FilterMenuItem = ({ filterName, setSelectedFilter, filter }: propTypes) => {

  const [isSelected, setIsSelected] = useState<boolean>()

  const selectFilter = () => { setSelectedFilter(filterName) }

  return (
    <TouchableOpacity
      style={[styles.container,
      filterName == filter ? {
        backgroundColor: 'white',
        borderWidth: 2,
        padding: 8
      } : {}
      ]}
      onPress={() => { selectFilter() }}
    >
      <Text
        style={[styles.filterMenuItemText,
        filterName == filter ? { color: 'black' } : {}
        ]}>
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