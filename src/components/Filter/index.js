import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import allActions from '../../store/actions'

export default function Filter() {
  const dispatch = useDispatch()
  const { filter } = useSelector(state => state.filter)

  function changeFilter(filter) {
    dispatch(allActions.filterActions.setFilter(filter))
  }
  
  return (
    <View style={styles.filter}>
      <TouchableOpacity onPress={() => changeFilter('all')}>
        <Text 
          style={[
            styles.textFilter, 
            filter == 'all' ? 
              styles.textFilterActive : 
              styles.textFilterInactive
          ]}
        >All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeFilter('chair')}>
        <Text 
          style={[
            styles.textFilter, 
            filter == 'chair' ? 
              styles.textFilterActive : 
              styles.textFilterInactive
          ]}
        >Chair</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeFilter('table')}>
        <Text 
          style={[
            styles.textFilter, 
            filter == 'table' ? 
              styles.textFilterActive : 
              styles.textFilterInactive
          ]}
        >Table</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeFilter('bed')}>
        <Text 
          style={[
            styles.textFilter, 
            filter == 'bed' ? 
              styles.textFilterActive : 
              styles.textFilterInactive
          ]}
        >Bed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeFilter('sofas')}>
        <Text 
          style={[
            styles.textFilter, 
            filter == 'sofas' ? 
              styles.textFilterActive : 
              styles.textFilterInactive
          ]}
        >Sofas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeFilter('stools')}>
        <Text 
          style={[
            styles.textFilter, 
            filter == 'stools' ? 
              styles.textFilterActive : 
              styles.textFilterInactive
          ]}
        >Stools</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,  
  },
  buttonFilter: {},
  textFilter: {
    fontWeight: '300'
  },
  textFilterActive: {
    color: '#FECE9E',
    fontWeight: '700'
  },
  textFilterInactive: {
    color: '#5C6181'
  }
})
