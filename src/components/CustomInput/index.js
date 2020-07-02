import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';

const CustomInput = ({ icon, ...rest }) => {
  console.log(icon)
  return (
    <View style={styles.viewInput}>
      <SimpleLineIcons name={icon} size={20} color='#5C6181' />
      <TextInput
        style={styles.input}
        placeholderTextColor='#5C6181'
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderRadius: 30
    
  },
  input: {
    // backgroundColor: '#ff05',
    width: '90%',
    marginLeft: 10,
    height: 30
  }
})

export default CustomInput