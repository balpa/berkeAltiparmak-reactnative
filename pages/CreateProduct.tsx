import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInputChangeEventData } from 'react-native'
import { Input } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { NativeSyntheticEvent } from 'react-native'

const CreateProduct = () => {
  //category selector could be done with comps

  const [productTitle, setProductTitle] = useState<string>('')
  const [productPrice, setProductPrice] = useState<number>(0)
  const [productDescription, setProductDescription] = useState('')
  const [productImageLink, setProductImageLink] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

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
        keyboardType='numeric'
        placeholder='Price'
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.textInput}
        autoCompleteType
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => setProductPrice(e.nativeEvent.target)}
      />
      <Input
        placeholder='Description'
        multiline={true}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={[styles.textInput, { height: 100 }]}
        autoCompleteType
      />
      <Input
        placeholder='Image Link'
        inputContainerStyle={{ borderBottomWidth: 0 }}
        style={styles.textInput}
        autoCompleteType
      />
      <Text style={{ padding: 5 }}>
        Selected Category: {selectedCategory}
      </Text>
      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.categorySelector}>
          <Text>Accessories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categorySelector}>
          <Text>Women-Clothings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categorySelector}>
          <Text>Men-Clothings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categorySelector}>
          <Text>Furnitures</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categorySelector}>
          <Text>Electronics</Text>
        </TouchableOpacity>
      </ScrollView>
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
  }
})