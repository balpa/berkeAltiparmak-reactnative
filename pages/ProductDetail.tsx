import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ProductDetail = ({ route }: any) => {

  const { description, price, imageURI, name } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <Image
          resizeMode='contain'
          style={styles.productImage}
          source={{ uri: imageURI }}
        />
      </View>
      <View style={styles.lower}>
        <View style={styles.productLowerHeader}>
          <Text style={styles.lowerNameandPriceText}>{name}</Text>
          <Text style={styles.lowerNameandPriceText}>${price}</Text>
        </View>
        <View style={styles.productLowerDescription}>
          <Text style={styles.lowerDescriptionText}>{description}</Text>
        </View>
      </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  upper: {
    width: '100%',
    height: '50%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lower: {
    width: '100%',
    height: '50%',
    marginTop: 10,
    backgroundColor: 'black',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowOffset: { width: 0, height: -5 },
    shadowRadius: 20,
    shadowOpacity: 0.8
  },
  productImage: {
    height: undefined,
    width: '80%',
    aspectRatio: 1,
    alignSelf: 'center'
  },
  productLowerHeader: {
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
  },
  productLowerDescription: {
    width: '100%',
    height: '85%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10
  },
  lowerNameandPriceText: {
    color: 'white',
    fontWeight: '800',
    maxWidth: '75%',

  },
  lowerDescriptionText: {
    color: 'white',
    fontWeight: '300'
  }
})