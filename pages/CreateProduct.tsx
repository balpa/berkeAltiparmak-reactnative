import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInputChangeEventData } from 'react-native'
import { Input } from 'react-native-elements'
import React, { useState, useEffect } from 'react'

const CreateProduct = () => {
  //category selector could be done with comps
  //input only wanna return number type, need a fix

  const [productTitle, setProductTitle] = useState<string>('')
  const [productPrice, setProductPrice] = useState<string>('')
  const [productDescription, setProductDescription] = useState<string>('')
  const [productImageLink, setProductImageLink] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const addProduct = () => {
    console.log('button works')
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder='Product Title'
        value={productTitle}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.textInput}
        autoCompleteType
        onChangeText={(text: string) => setProductTitle(text)}
      />
      <Input
        placeholder='Price'
        keyboardType='numeric'
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.textInput}
        autoCompleteType
        onChangeText={(text: any) => setProductPrice(text)}
      />
      <Input
        placeholder='Description'
        multiline={true}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={[styles.textInput, { height: 100 }]}
        autoCompleteType
        onChangeText={(text: string) => setProductDescription(text)}
      />
      <Input
        placeholder='Image Link'
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.textInput}
        autoCompleteType
        onChangeText={(text: string) => setProductDescription(text)}
      />
      <Text style={{ padding: 5 }}>
        Selected Category: {selectedCategory}
      </Text>
      <ScrollView horizontal={true}>
        <TouchableOpacity
          style={[styles.categorySelector, selectedCategory === 'Accessories' ? { backgroundColor: 'black' } : {}]}
          onPress={() => setSelectedCategory('Accessories')}>
          <Text
            style={selectedCategory === 'Accessories' ? { color: 'white' } : {}}>
            Accessories
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categorySelector, selectedCategory === 'Women-Clothings' ? { backgroundColor: 'black' } : {}]}
          onPress={() => setSelectedCategory('Women-Clothings')}>
          <Text
            style={selectedCategory === 'Women-Clothings' ? { color: 'white' } : {}}>
            Women-Clothings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categorySelector, selectedCategory === 'Men-Clothings' ? { backgroundColor: 'black' } : {}]}
          onPress={() => setSelectedCategory('Men-Clothings')}>
          <Text
            style={selectedCategory === 'Men-Clothings' ? { color: 'white' } : {}}>
            Men-Clothings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categorySelector, selectedCategory === 'Furnitures' ? { backgroundColor: 'black' } : {}]}
          onPress={() => setSelectedCategory('Furnitures')}>
          <Text
            style={selectedCategory === 'Furnitures' ? { color: 'white' } : {}}>
            Furnitures
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categorySelector, selectedCategory === 'Electronics' ? { backgroundColor: 'black' } : {}]}
          onPress={() => setSelectedCategory('Electronics')}>
          <Text
            style={selectedCategory === 'Electronics' ? { color: 'white' } : {}}>
            Electronics
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.addProductButton} onPress={() => { addProduct() }}>
        <Text style={{ color: 'white' }}>Add Product</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateProduct

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  textInput: {
    width: 50,
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    marginTop: 5,
    fontSize: 16
  },
  categorySelector: {
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 3
  },
  addProductButton: {
    position: 'absolute',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    bottom: 25,
    alignSelf: 'center'
  }
})