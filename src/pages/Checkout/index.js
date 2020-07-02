import React, { useMemo } from 'react';
import { 
  StyleSheet, 
  View,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';
import { useSelector } from 'react-redux'

import ProductRow from '../../components/ProductRow'

export default function Checkout() {
  const { cart } = useSelector(state => state.cart)

  const totalAmount = useMemo(() => {
    if(!cart.length) {
      return '$ 0.00'
    } else {
      let amount = 0

      cart.forEach(product => {
        amount += product.value
      });

      return `$ ${amount}`
    }
  }, [cart]);

  return (
    <View style={styles.container}>      
      <View style={styles.content}>
        <View style={styles.listProduct}>
          <FlatList
            data={cart}
            renderItem={(item) => <ProductRow data={item} origin='cart' />}
            keyExtractor={item => String(item.id)}            
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.emptyView}>
                <Text style={styles.textEmpty}>Empty cart</Text>
              </View>
            )}
          />
          <View style={styles.viewTotal}>
            <Text style={styles.textCheckout}>Total Amount: {totalAmount}</Text>
            <TouchableOpacity
              disabled={!cart.length}
              style={styles.buttonCheckout}
            >
              <Text style={styles.textCheckout}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee1'
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  listProduct: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  buttonCheckout: {
    height: 40,
    borderRadius: 30,
    backgroundColor: '#FECE9E',
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  textCheckout: {
    fontWeight: 'bold',
    color: '#5C6181',
    paddingHorizontal: 30,
  },
  emptyView: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textEmpty: {
    fontWeight: 'bold',
    color: '#5C6181',
    paddingHorizontal: 30,
  },
  viewTotal: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    height: 70,
  }
});
