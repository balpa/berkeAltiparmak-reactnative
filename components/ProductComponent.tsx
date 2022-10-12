import { View, Text, StyleSheet, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'

interface propTypes {
  data: any,
  navigation: any,
  selectedFilter: any
}

const ProductComponent = ({ data, navigation, selectedFilter }: propTypes) => {

  const window = useWindowDimensions()

  if (selectedFilter === data.category) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", {
            name: `${data.name}`,
            userID: `${data._id}`,
            description: `${data.description}`,
            imageURI: `${data.avatar}`,
            price: `${data.price}`
          })
        }}
      >
        <View style={[styles.container, { width: window.width / 2 - 10 }]}>
          <View style={styles.upper}>
            <Image
              resizeMode='contain'
              style={styles.avatar}
              source={{ uri: data.avatar }} />
          </View>
          <View style={styles.lower}>
            <Text numberOfLines={1} style={styles.lowerText}>{data.name}</Text>
            <Text numberOfLines={1} style={styles.lowerText}>${data.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  } else if (selectedFilter == 'All') {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", {
            name: `${data.name}`,
            userID: `${data._id}`,
            description: `${data.description}`,
            imageURI: `${data.avatar}`,
            price: `${data.price}`
          })
        }}
      >
        <View style={[styles.container, { width: window.width / 2 - 10 }]}>
          <View style={styles.upper}>
            <Image
              resizeMode='contain'
              style={styles.avatar}
              source={{ uri: data.avatar }} />
          </View>
          <View style={styles.lower}>
            <Text numberOfLines={1} style={styles.lowerText}>{data.name}</Text>
            <Text numberOfLines={1} style={styles.lowerText}>${data.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  } else { return null }
}

export default ProductComponent

const styles = StyleSheet.create({
  container: {
    margin: 5,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10
  },
  upper: {
    height: '75%',
    width: '100%'
  },
  lower: {
    height: '25%',
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.7,
    shadowRadius: 25
  },
  lowerText: {
    color: 'white',
  },
  avatar: {
    height: undefined,
    width: '50%',
    alignSelf: 'center',
    aspectRatio: 0.7
  }
})