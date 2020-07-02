import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import CustomInput from '../../components/CustomInput'

import avatar from '../../assets/img/avatar.png'

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style>
        <Image style={styles.avatar} source={avatar} />
      </View>
      <View>
        <View style={styles.viewInput}>
          <CustomInput 
            icon="user"
            placeholder='Name'
          />
        </View>
        <View style={styles.viewInput}>
          <CustomInput 
            icon="envelope"
            placeholder='Mail'
          />
        </View>
        <View style={styles.viewInput}>
          <CustomInput 
            icon="lock"
            placeholder='Current Password'
          />
        </View>
        <View style={styles.viewInput}>
          <CustomInput 
            icon="lock"
            placeholder='New Password'
          />
        </View>
        <View style={styles.viewInput}>
          <CustomInput 
            icon="lock"
            placeholder='Confirmation Password'
          />
        </View>
      </View>
      <View style={{ width: '100%' }}>
        <TouchableOpacity
          style={styles.buttonUpdate}
        >
          <Text style={styles.textUpdate}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    marginTop: 60,
  },
  viewInput: {
    marginTop: 10
  },
  buttonUpdate: {
    height: 40,
    borderRadius: 30,
    backgroundColor: '#FECE9E',
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  textUpdate: {
    fontWeight: 'bold',
    color: '#5C6181',
    paddingHorizontal: 30,
  },
})
