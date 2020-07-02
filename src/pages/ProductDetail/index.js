import React, { useEffect } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView, 
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SimpleLineIcons } from '@expo/vector-icons'
import {useSelector, useDispatch} from 'react-redux'
import StarRating from 'react-native-star-rating'

import allActions from '../../store/actions'

const ProductDetail = ({ route }) => {
  const { item } = route.params
  const navigation = useNavigation()
  
  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cart)

  function addCart() {
    dispatch(allActions.cartActions.addCart(item))
  }

  function addFavorite() {
    dispatch(allActions.favoriteActions.addFavorite(item))
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <SimpleLineIcons
            name="arrow-left"
            color="#5C6181"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Checkout')}>
          <SimpleLineIcons
            name="handbag"
            color="#5C6181"
            size={25}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.content}>
        <View style={styles.block}>
          <Image source={{ uri: item.image_url }} style={styles.img} />
        </View>
        <View style={styles.block2}>
          <View style={styles.viewNameValue}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textValue}>{`$ ${item.value}`}</Text>
          </View>
          <View style={styles.viewRatting}>
            <Text style={styles.textRate}>{item.assessments}</Text>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={item.assessments}
              emptyStarColor="#fff"
              fullStarColor="#FECE9E"
              halfStarColor="#FECE9E"
              starSize={20}
              containerStyle={{ marginLeft: 20 }}
            />
          </View>
          <View style={styles.viewProductStyle}>
            <View style={styles.viewSpecs}>
              <Text style={styles.textSpecsName}>Fabric color</Text>
              <Text style={styles.textSpecsValue}>{item.color}</Text>
            </View>
            <View style={styles.viewSpecs}>
              <Text style={styles.textSpecsName}>Style</Text>
              <Text style={styles.textSpecsValue}>{item.style}</Text>
            </View>
            <View style={styles.viewSpecs}>
              <Text style={styles.textSpecsName}>Made in</Text>
              <Text style={styles.textSpecsValue}>{item.madeIn}</Text>
            </View>
          </View>
          <View style={styles.viewDescription}>
            <Text style={styles.textDescription}>{item.description}</Text>
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.buttonAddFav}
              onPress={addFavorite}
            >
              <Text style={styles.textAdd}>Add to Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAddCart}
              onPress={addCart}
            >
              <Text style={styles.textAdd}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const DEVICE_WIDTH = Dimensions.get('screen').width;
const DEVICE_HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between'
  },
  img: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5
  },
  block: {
    height: DEVICE_HEIGHT * 0.5
  },
  block2: {
    marginTop: -100,
    height: DEVICE_HEIGHT * 0.4,
    backgroundColor: '#5C6181',
    borderTopLeftRadius: 30,
    justifyContent: 'space-between',
  },
  viewNameValue: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'flex-end',
  },
  textName: {
    fontSize: 25,
    color: '#FECE9E',
  },
  textValue: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  viewRatting: {
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  textRate: {
    color: '#FFF',
  },
  viewProductStyle: {
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  viewSpecs: {
    marginRight: 50,
  },
  textSpecsName: {
    color: '#FFF'
  },
  textSpecsValue: {
    color: '#FECE9E',
  },
  viewDescription: {
    paddingHorizontal: 30,
  },
  textDescription: {
    color: '#FFF',
  },
  viewButton: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonAddCart: {
    borderTopLeftRadius: 30,
    backgroundColor: '#FECE9E',
    justifyContent: "center",
    alignItems: "center"
  },
  buttonAddFav: {
    borderTopRightRadius: 30,
    backgroundColor: '#FECE9E',
    justifyContent: "center",
    alignItems: "center"
  },
  textAdd: {
    fontWeight: 'bold',
    color: '#5C6181',
    paddingHorizontal: 30,
  }
});

export default ProductDetail
