import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'



const CategorySelectorComponent = ({ categoryData, setSelectedCategory, selectedCategory }: any) => {

  return (
    <TouchableOpacity
      style={[styles.categorySelector, selectedCategory === categoryData.name ? { backgroundColor: 'black' } : {}]}
      onPress={() => setSelectedCategory(`${categoryData.name}`)}>
      <Text
        style={selectedCategory === categoryData.name ? { color: 'white' } : {}}>
        {categoryData.name}
      </Text>
    </TouchableOpacity>
  )
}

export default CategorySelectorComponent

const styles = StyleSheet.create({
  categorySelector: {
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 3
  },
})