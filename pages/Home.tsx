import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ProductComponent from '../components/ProductComponent'
import FilterMenuItem from '../components/FilterMenuItem'
import { Icon, Button } from 'react-native-elements'


const Home = ({ navigation }: any) => {
  //todo: menuFilter will be scrollable

  const searchProduct = () => {
    console.log('search button pressed')
  }

  const goToCreateProductPage = () => {
    navigation.navigate('Create')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.upaymentsText}>UPayments Store</Text>
        <TouchableOpacity
          onPress={() => searchProduct()}>
          <Icon
            iconStyle={{ fontSize: 25 }}
            name='search'
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.filterMenu}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.filterMenuScrollView}>
          <FilterMenuItem filterName={'All'} isSelected={false} />
          <FilterMenuItem filterName={'Accessories'} isSelected={false} />
          <FilterMenuItem filterName={'Womens-Clothing'} isSelected={false} />
          <FilterMenuItem filterName={'Mens-Clothing'} isSelected={false} />
          <FilterMenuItem filterName={'Furnitures'} isSelected={false} />
          <FilterMenuItem filterName={'Electronics'} isSelected={false} />
        </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productsScrollView}
      >
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </ScrollView>
      <TouchableOpacity
        style={styles.createButtonContainer}
        onPress={() => goToCreateProductPage()}>
        <Icon
          iconStyle={{ fontSize: 40 }}
          name='add'
          tvParallaxProperties={undefined}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  topBar: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  filterMenu: {
    width: '100%',
    height: 50,
  },
  createButtonContainer: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    backgroundColor: 'white'
  },
  upaymentsText: {
    fontSize: 18,
    fontWeight: '800'
  },
  filterMenuScrollView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  productsScrollView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'

  }
})