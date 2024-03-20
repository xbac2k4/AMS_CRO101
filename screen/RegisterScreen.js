import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

const LoginScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [emailaddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  let url_api = 'http://192.168.1.112:3000/users';
  const [Data_Users, setData_User] = useState([]);
  const getAPI_User = async () => {
    try {
      return await fetch(url_api)
        .then((response) => response.json())
        .then((data) => setData_User(data))
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      getAPI_User()
    });
    return unsubscribe;
  }, [navigation]);
  // console.log(emailaddress);
  // console.log(password);
  const Event_DangKy = () => {
    // tạo đối tượng dữ liệu
    // console.log(Data_Users.filter((user) => { user.email == emailaddress }));
    let objUser =
    {
      // id: uuid.v4(),
      fullName: fullName,
      email: emailaddress,
      username: username,
      password: password,
      address: address,
      phoneNumber: phoneNumber
    };
    if (fullName.length == 0 || emailaddress.length == 0 || username.length == 0 || password.length == 0 || address.length == 0 || phoneNumber.length == 0) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      if (Data_Users.filter((user) => { user.email == emailaddress }).length != 0) {
        Alert.alert('Email được sử dụng')
        return
      } else if (Data_Users.filter((user) => { user.username == username }).length != 0) {
        Alert.alert('Tên đăng nhập đã được sử dụng')
      } else if (Data_Users.filter((user) => {user.phoneNumber == phoneNumber}).length != 0) {
        Alert.alert('Số điện thoại đã đuợc sử dụng')
      } else {
        fetch(url_api, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(objUser)
        })
          .then((res) => {
            if (res.status == 201)
              Alert.alert("Đăng ký thành công")
          })
          .catch((ex) => {
            console.log(ex);
          });
      }
    }
  }
  return (
    <ScrollView>
      <ImageBackground source={require('../assets/img/Background.png')} resizeMode='cover' style={{}}>
        <View style={{ alignItems: 'center', paddingTop: 10, width: windowWidth, height: windowHeight }}>
          <Image style={{ width: 150, height: 168, marginBottom: 20 }} source={require('../assets/img/Logo_Coffee.png')} />
          <Text style={styles.styleTextDN}>Welcome to Coffee</Text>
          <Text style={{ color: 'gray', fontSize: 18, fontStyle: 'italic' }}>Register your account</Text>
          <TextInput style={styles.styleTextInput} placeholder='FullName' onChangeText={(txt) => setFullName(txt)} />
          <TextInput style={styles.styleTextInput} placeholder='Email' onChangeText={(txt) => setEmailAddress(txt)} />
          <TextInput style={styles.styleTextInput} placeholder='Username' onChangeText={(txt) => setUsername(txt)} />
          <TextInput style={styles.styleTextInput} placeholder='Password' onChangeText={(txt) => setPassword(txt)} />
          <TextInput style={styles.styleTextInput} placeholder='Phone Number' onChangeText={(txt) => setPhoneNumber(txt)} />
          <TextInput style={styles.styleTextInput} placeholder='Address' onChangeText={(txt) => setAddress(txt)} />
          <Pressable onPress={() => Event_DangKy()} style={styles.styleButton}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>REGISTER</Text>
          </Pressable>
          {/* <Button title='ĐĂNG NHẬP' color={'#701C18'} onPress={()=>{Alert.alert('Đăng nhập thành công')}}/> */}
          <View style={{ flexDirection: 'row' }}>
            <Text>You have an account? - Click </Text>
            <Text style={{ color: '#C87138', fontStyle: 'italic', fontWeight: 'bold' }} onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  styleTextDN: {
    fontFamily: 'Lemon-Regular',
    color: '#C87138',
    fontSize: 25,
  },
  styleTextInput: {
    width: 320,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5
  },
  styleButton: {
    justifyContent: 'center',
    width: 320,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#C87138',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10
  }
})