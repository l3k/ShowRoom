import React from 'react';
import { 
  StyleSheet, 
  View,
  FlatList,
  Text
} from 'react-native';
import { useSelector } from 'react-redux'

import ProductRow from '../../components/ProductRow'

export default function Favorites() {
  const { favorite } = useSelector(state => state.favorite)

  return (
    <View style={styles.container}>      
      <View style={styles.content}>
        <View style={styles.listProduct}>
          <FlatList
            data={favorite}
            renderItem={(item) => <ProductRow data={item} origin='favorite' />}
            keyExtractor={item => String(item.id)}            
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.emptyView}>
                <Text style={styles.textEmpty}>Empty favorites</Text>
              </View>
            )}
          />
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
  }
});
