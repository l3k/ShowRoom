import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Product = ({ data }) => {
  const navigation = useNavigation()
  const { 
    item
  } = data

  function navigateDetail() {
    navigation.navigate('ProductDetail', { item })
  }

  return (
    <TouchableOpacity onPress={navigateDetail}>
      <View style={styles.container}>
        <Image source={{ uri: item.image_url }} style={styles.img} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{`$ ${item.value}`}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center'
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  name: {
    marginTop: 15,
    fontWeight: '700',
    color: '#5C6181'
  },
  price: {
    color: '#FECE9E',
    fontWeight: '300',
    fontSize: 14
  }
})

export default Product
