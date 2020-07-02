import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import Filter from '../../components/Filter'
import Product from '../../components/Product'

import products from '../../products'

export default function Home() {
  const [ filteredProducts, setFilteredProducts ] = useState([])
  const { filter } = useSelector(state => state.filter)
  const navigation = useNavigation()
  
  useEffect(() => {
    if(filter == 'all') {
      setFilteredProducts(products)      
    } else {
      setFilteredProducts(
        products.filter((product) => { return product.type == filter })
      )
    }
  }, [filter])

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
          <SimpleLineIcons
            name="handbag"
            color="#5C6181"
            size={25}
            style={styles.icon}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.title}>Home Furnitures</Text>
        <Filter />
        <View style={styles.listProduct}>
          <FlatList
            data={filteredProducts}
            renderItem={(item) => <Product data={item} />}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            horizontal={false}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: '#5C6181',
    fontSize: 40,
    fontWeight: 'bold'
  },
  listProduct: {
    flex: 1,
    marginTop: 20,
  },
  row: {
    marginBottom: 40,
    justifyContent: 'space-around'
  }
});