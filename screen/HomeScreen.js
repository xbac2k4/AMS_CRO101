import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, FlatList, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WelcomeScreen from './WelcomeScreen';
import uuid from 'react-native-uuid';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation, route }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [isLoading, setisLoading] = useState(true);
  let idUserName = route.params?.id;
  // API
  const [Data_Products, setData_Products] = useState([]);
  const getAPI_Products = async () => {
    try {
      return await fetch('http://192.168.1.112:3000/products')
        .then((response) => response.json())
        .then((data) => setData_Products(data))
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      getAPI_Products()
    });
    return unsubscribe;
  }, [navigation]);
  // ==================== //
  const ThemSanPham = ({ product }) => {
    let url_api = 'http://192.168.1.112:3000/carts';
    let objSP = {
      id: uuid.v4(),
      userId: idUserName,
      image: product.image,
      nameProdusts: product.nameProdusts,
      prices: [
        {
          size: "S",
          price: "1.2",
          quantity: "0"
        },
        {
          size: "M",
          price: "1.5",
          quantity: "0"
        },
        {
          size: "L",
          price: "1.9",
          quantity: "0"
        }
      ],
    }
    fetch(url_api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objSP)
    })
      .then((res) => {
        if (res.status == 201)
          Alert.alert("Thêm thành công")
      })
      .catch((ex) => {
        console.log(ex);
      });
  }
  const DATA_TYPE = [
    {
      id: '1',
      title: 'All',
    },
    {
      id: '2',
      title: 'Capuchino',
    },
    {
      id: '3',
      title: 'Espresso',
    },
    {
      id: '4',
      title: 'Americano',
    },
    {
      id: '5',
      title: 'Macchiato',
    },
  ];
  const Type = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const Product = ({ product }) => (
    <Pressable onPress={() => navigation.navigate('ProductDetails')}>
      <View style={{
        width: 'auto',
        height: 210,
        // backgroundColor: '#45484F',
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 5,
        padding: 15,
        // opacity:0.8
        backgroundColor: 'rgba(69, 72, 79, 0.3)',
      }}>
        <Image style={{
          width: 110,
          height: 110,
          borderRadius: 15,
          backgroundColor: 'white',
          resizeMode: 'cover',
        }} source={{ uri: product.image }} />
        <Text style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 5
        }}>{product.nameProdusts}</Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 10,
          paddingVertical: 5
        }}>
          <Text style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: 'bold',
            fontSize: 18
          }}><Text style={{
            color: '#C87138',
            fontWeight: 'bold',
            fontSize: 18
          }}>$ </Text>{product.prices}</Text>
          <Pressable onPress={() => ThemSanPham({ product })} style={{
            backgroundColor: '#DF7231',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>+</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
  return (
    <ScrollView style={{ backgroundColor: '#0B0E15' }}>
      <View style={{
        width: windowWidth,
        height: 'auto',
        // backgroundColor: '#131313',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingBottom: 10
      }}>
        <View style={{
          width: windowWidth,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          padding: 25
        }}>
          <View>
            <Text style={{
              color: 'gray'
            }}>Location</Text>
            <Text style={{
              color: 'white',
              fontWeight: 'bold'
            }}>
              Chương Mỹ, Hà Nội
            </Text>
          </View>
          <Image style={{
            width: 40,
            height: 40,
          }} source={require('../assets/img/Logo_Coffee.png')} />
        </View>
        <Text style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          width: 170,
          marginLeft: -170,
          marginBottom: 20,
        }}>Find the best coffee for you</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <TextInput placeholder='Search Coffee' style={{
            width: 340,
            height: 45,
            backgroundColor: '#313131',
            borderRadius: 10,
            fontSize: 14,
            color: 'white',
            paddingHorizontal: 10,
          }} placeholderTextColor={'white'} keyboardShouldPersistTaps />
          <Image style={{
            position: 'absolute',
            right: 20,
            width: 20,
            height: 20
          }} source={require('../assets/icons/search.png')} />
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal
            data={DATA_TYPE}
            renderItem={(obj) => {
              // console.log(obj);
              return <Type title={obj.item.title} />
            }}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        <SafeAreaView style={{ marginTop: 10, height: 210 }}>
          {
            (isLoading) ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                horizontal
                data={Data_Products}
                renderItem={({ item }) =>
                  // console.log(obj);
                  <Product product={item} />
                }
                keyExtractor={item => item.id}
              />
            )
          }
        </SafeAreaView>
        <Text style={{
          marginVertical: 20,
          color: 'white',
          fontSize: 18,
          marginLeft: -210,
        }}>Coffee beans</Text>
        <SafeAreaView style={{ height: 210 }}>
          {
            (isLoading) ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                horizontal
                data={Data_Products}
                renderItem={({ item }) =>
                  // console.log(obj);
                  <Product product={item} />
                }
                keyExtractor={item => item.id}
              />
            )
          }
        </SafeAreaView>
      </View>
    </ScrollView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 20
  },
  item: {
    marginHorizontal: 10,
    // backgroundColor:'white',
    height: 20
  },
  title: {
    color: '#45484F',
    fontSize: 14,
  },
})