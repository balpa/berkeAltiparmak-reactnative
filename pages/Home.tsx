import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, ListRenderItem, FlatListProps } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductComponent from '../components/ProductComponent'
import FilterMenuItem from '../components/FilterMenuItem'
import { Icon, Button } from 'react-native-elements'
import { LogBox } from 'react-native'

interface propTypes {
  item: React.ReactNode,
}

const Home = ({ navigation }: any) => {

  LogBox.ignoreLogs(['image']) // someone created a product without an image uri

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlcmtlYWx0aXBhcm1ha0BvdXRsb29rLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9iYWxwYSIsImlhdCI6MTY2NTQ4Mjc1MywiZXhwIjoxNjY1OTE0NzUzfQ.VhiCfm_D6wU1V-UX1lU_CkZAqAdil_ePiMPKJ9D-lBE'

  const API_ENDPOINTS = {
    products: 'https://upayments-studycase-api.herokuapp.com/api/products',
    categories: 'https://upayments-studycase-api.herokuapp.com/api/categories'
  }

  const [apiData, setApiData] = useState<any>()
  const [apiCategoriesData, setApiCategoriesData] = useState<any>()
  const [selectedFilter, setSelectedFilter] = useState<string>('All')
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  const fetchData = () => {
    fetch(`${API_ENDPOINTS.products}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((responseData: any) => setApiData(responseData))

    fetch(`${API_ENDPOINTS.categories}`, {    //fetch categories
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((responseData: any) => setApiCategoriesData(responseData))
  }

  const refreshPage = () => { // pull down to refresh, illusion for the animation
    setIsRefreshing(true)
    fetchData()
    setTimeout(() => { setIsRefreshing(false) }, 500)
  }

  const goToCreateProductPage = () => {
    navigation.navigate('Create')
  }

  useEffect(() => {   // fetching products
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.upaymentsText}>UPayments Store</Text>
        <TouchableOpacity>
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
          <FilterMenuItem
            filterName='All'
            setSelectedFilter={setSelectedFilter}
            filter={selectedFilter}
          />
          {/*LISTING CATEGORIES*/}
          {apiCategoriesData != undefined
            ?
            apiCategoriesData.categories.map((item: any) => {
              return (
                <FilterMenuItem
                  key={item.name}
                  filterName={item.name}
                  setSelectedFilter={setSelectedFilter}
                  filter={selectedFilter}
                />
              )
            })
            : null}
        </ScrollView>
      </View>
      <View>
        {/* LISTING PRODUCTS*/}
        {apiData != undefined
          ?
          <FlatList
            extraData={selectedFilter}
            data={apiData.products.filter((item: any) => {
              if (item.category == selectedFilter) { return apiData.products }
              else if (selectedFilter === 'All') { return apiData.products }
            })}
            renderItem={({ item }) => (
              <ProductComponent
                key={item}
                data={item}
                navigation={navigation}
                selectedFilter={selectedFilter} />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => <Text style={{ fontSize: 32, fontWeight: '900' }}>Empty</Text>}
            numColumns={2}
            refreshing={isRefreshing}
            onRefresh={() => refreshPage()}
          />
          : null
        }
      </View>
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