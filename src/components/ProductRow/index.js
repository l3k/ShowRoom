import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'

import allActions from '../../store/actions'

const ProductRow = ({ data, origin  }) => {
  const { 
    item
  } = data
  const dispatch = useDispatch()

  function handleRemove() {
    if(origin == 'favorite') {
      dispatch(allActions.favoriteActions.removeFavorite(item.id))
    }
 
    if(origin == 'cart') {
      dispatch(allActions.cartActions.removeCart(item.id))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={{ uri: item.image_url }} style={styles.img} />
        <View style={styles.viewText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.value}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleRemove}
      >
        <SimpleLineIcons name="trash" size={20} color="#5C6181" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 5,
    height: 100,
    borderRadius: 30,    
    backgroundColor: '#fff'    
  },
  info: {
    flexDirection: 'row',
  },
  viewText: {
    marginLeft: 20
  },
  img: {
    width: 60,
    height: 60,
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

export default ProductRow
