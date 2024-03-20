import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import MeterialIcons from 'react-native-vector-icons/MeterialIcons'

const LoginScreen = ({ navigation }) => {
  // lấy width height của màn hình ứng dụng
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  //
  const [emailaddress, setEmailAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setCheckBox] = useState(false);
  // console.log(emailaddress);
  // console.log(password);
  const Event_DangNhap = () => {
    // let Data = Data_Users.filter((data) => data.email == emailaddress)

    // if (emailaddress.trim() == '' || password.trim() == '') {
    //   Alert.alert('Vui lòng nhập tài khoản và mật khẩu')
    // } else if (Data.length == 0) {
    //   Alert.alert('Tài khoản không tồn tại')
    // } else {
    //   for (const iterator of Data) {
    //     if (password == iterator.password) {
    //       navigation.navigate('TabBottom')
    //     } else {
    //       Alert.alert('Mật khẩu không chính xác')
    //     }
    //   }
    // }
    if (username.length == 0) {
      Alert.alert('Vui lòng nhập tài khoản')
      return;
    }
    if (password.length == 0) {
      Alert.alert('Vui lòng nhập mật khẩu')
      return;
    }
    let url_check_login = "http://192.168.1.112:3000/users?username=" + username;

    fetch(url_check_login)
      .then((res) => { return res.json() })
      .then(async (res_login) => {
        // console.log(res_login);
        if (res_login.length != 1) {
          Alert.alert('Tài khoản này chưa được đăng ký');
          return;
        } else {
          let objU = res_login[0];
          if (objU.password != password) {
            Alert.alert('Mật khẩu không chính xác');
            return;
          } else {
            try {
              await AsyncStorage.setItem('loginInfo', JSON.stringify(objU));
              navigation.navigate('TabBottom', { id: res_login[0].id })
            } catch (e) {
              console.log(e);
            }
          }
        }
      })
  }
  return (
    <ScrollView>
      <ImageBackground source={require('../assets/img/Background.png')} resizeMode='cover' style={{}}>
        <View style={{ alignItems: 'center', paddingTop: 100, width: windowWidth, height: windowHeight }}>
          <Image style={{ width: 150, height: 168, marginBottom: 20 }} source={require('../assets/img/Logo_Coffee.png')} />
          <Text style={styles.styleTextDN}>Welcome to Coffee</Text>
          <Text style={{ color: 'gray', fontSize: 18, fontStyle: 'italic' }}>Login to continues</Text>
          <TextInput style={styles.styleTextInput} placeholder='Email Address' onChangeText={(txt) => setUsername(txt)} />
          <TextInput secureTextEntry={true} style={styles.styleTextInput} placeholder='Password' onChangeText={(txt) => setPassword(txt)} />
          <View style={{ flexDirection: 'row', width: windowWidth, paddingHorizontal: 50, paddingVertical: 5 }}>
            <TouchableOpacity style={styles.checkBox} onPress={() => { setCheckBox(!isChecked) }}>
              {
                isChecked ? (<Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: -10 }}>x</Text>) : (<Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: -10 }}></Text>)
              }
            </TouchableOpacity>
            <Text style={{ marginLeft: 7 }}>Remember</Text>
          </View>
          <Pressable onPress={() => Event_DangNhap()} style={styles.styleButton}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>LOGIN</Text>
          </Pressable>
          <View style={{ flexDirection: 'row' }}>
            <Text>Don't have account? - Click </Text>
            <Text style={{ color: '#C87138', fontStyle: 'italic', fontWeight: 'bold' }} onPress={() => navigation.navigate('RegisterScreen')}>Register</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>Forgot Password? - Click </Text>
            <Text style={{ color: '#C87138', fontStyle: 'italic', fontWeight: 'bold' }}>Reset</Text>
          </View>
          {/* <View style={{borderWidth:1, borderRadius:10, paddingHorizontal:10, borderColor:'black', alignItems:'center', flexDirection:'row', width:320, height:50}}>
              <Image style={{width:20, height:20, marginRight:10}} source={require('../assets/icons/home.png')}/>
              <TextInput style={{borderLeftWidth:1, padding:10}} placeholder='Email'/>
            </View> */}
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  styleTextDN: {
    fontFamily: 'Lemon-Regular',
    color: '#C87138',
    fontSize: 25,
  },
  styleTextInput: {
    width: 320,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    color: 'black'
  },
  styleButton: {
    justifyContent: 'center',
    width: 320,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#C87138',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 20,
  }
})