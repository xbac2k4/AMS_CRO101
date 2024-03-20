import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Đăng nhập thành công')}>
        <View style={{width:310, height:50, alignItems:'center', backgroundColor:'#701C18', borderRadius:10}}>
            <Text style={{color:'white', fontSize:18, paddingTop:13}}>ĐĂNG NHẬP</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    styleTextInput: {
        width:310,
        height:50,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginVertical:5
    }
})