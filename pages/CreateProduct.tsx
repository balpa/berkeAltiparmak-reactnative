import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import CategorySelectorComponent from '../components/CategorySelectorComponent'

const CreateProduct = ({ navigation }: any) => {
  let email = 'berkealtiparmak@outlook.com'

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlcmtlYWx0aXBhcm1ha0BvdXRsb29rLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9iYWxwYSIsImlhdCI6MTY2NTQ4Mjc1MywiZXhwIjoxNjY1OTE0NzUzfQ.VhiCfm_D6wU1V-UX1lU_CkZAqAdil_ePiMPKJ9D-lBE'

  const [productTitle, setProductTitle] = useState<string>('')
  const [productPrice, setProductPrice] = useState<string>('')
  const [productDescription, setProductDescription] = useState<string>('')
  const [productImageLink, setProductImageLink] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [apiCategoriesData, setApiCategoriesData] = useState<any>()

  useEffect(() => {
    fetch('https://upayments-studycase-api.herokuapp.com/api/categories', {    //fetch categories
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((responseData: any) => setApiCategoriesData(responseData))
  }, [])

  const addProduct = () => {
    if (productTitle != '' && productPrice != '' && productDescription != '' && productImageLink != '' && selectedCategory != '') {
      fetch('https://upayments-studycase-api.herokuapp.com/api/products', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: productTitle,
          price: parseInt(productPrice),
          category: selectedCategory,
          description: productDescription,
          avatar: productImageLink,
          developerEmail: email
        })
      })
        .then((response) => response.json())
        .then((data) => { console.log(data) })
        .then(() => navigation.navigate('Home'))
        .catch((err) => { console.log(err.message) })
    } else { console.log('Something\'s null or etc') }
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
        {apiCategoriesData && apiCategoriesData.categories.map((item: any, index: any) => {
          return (
            <CategorySelectorComponent
              key={index}
              categoryData={item}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />)
        })}
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