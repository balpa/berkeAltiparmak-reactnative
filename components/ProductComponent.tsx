import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

const ProductComponent = () => {

  const window = useWindowDimensions()

  return (
    <View style={[styles.container, { width: window.width / 2 - 10 }]}>
      <Text>ProductComponent</Text>
    </View>
  )
}

export default ProductComponent

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 200,
    backgroundColor: 'red',
  }
})