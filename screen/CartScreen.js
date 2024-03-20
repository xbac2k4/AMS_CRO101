import { ActivityIndicator, Alert, Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import uuid from 'react-native-uuid';

const CartScreen = ({ navigation, route }) => {
  const [quantity, setQuantity] = useState(quantity + 1);
  const [isLoading, setisLoading] = useState(true);
  const windowWidth = Dimensions.get('window').width - 20;
  const windowHeight = Dimensions.get('window').height;
  const [isChecked, setCheckBox] = useState(false);
  let url_api = 'http://192.168.1.112:3000/carts?userId=';
  // console.log(route.params?.id);
  // API 
  const [Data_Carts, setData_Carts] = useState([]);
  const getAPI_Carts = async () => {
    try {
      return await fetch(url_api + route.params?.id)
        .then((response) => response.json())
        .then((data) => setData_Carts(data))
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
      getAPI_Carts()
    });
    return unsubscribe;
  }, [navigation]);
  // ==================== //
  const Order = () => {
    let check = 0;
    for (const object of Data_Carts) {
      let objOrder =
      {
        id: uuid.v4(),
        idCart: object.id,
        userId: route.params?.id
      };
      // console.log(object.id);
      fetch('http://192.168.1.112:3000/orders', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objOrder)
      })
        .then((res) => {
          if (res.status == 201) {
            fetch('http://192.168.1.112:3000/carts?id=' + object.id, {
              method: 'PUT',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
                {
                  idUser: route.params?.id + 'DaXoa'
                }
              )
          })
              .then((res) => {
                  if (res.status == 200)
                      Alert.alert("Sửa thành công")
              })
              .catch((ex) => {
                  console.log(ex);
              });
          }
        })
        .catch((ex) => {
          console.log(ex);
        });
    }
    getAPI_Carts()
  }
  // ==================== //
  const Cart = ({ carts }) => (
    <View style={{
      backgroundColor: 'rgba(27, 27, 30, 0.8)',
      // backgroundColor: 'white',
      width: windowWidth,
      borderRadius: 20,
      padding: 10,
      marginVertical: 10
    }}>
      <View style={{
        flexDirection: 'row',
        marginBottom: 5
      }}>
        <Image style={{
          width: 100,
          height: 100,
          borderRadius: 10
        }} source={{ uri: carts.image }} />
        <View style={{
          gap: 10,
          paddingHorizontal: 20,
          // flexWrap: 'wrap',
          // flexDirection: 'row',
          // alignItems: 'center',
          // width: 300,
          // rowGap: 10,
        }}>
          <Text style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 5
          }}>{carts.nameProdusts}</Text>
          {/* <TouchableOpacity style={styles.checkBox} onPress={() => { setCheckBox(!isChecked) }}>
            {
              isChecked ? (<Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', marginTop: -10 }}>x</Text>) : (<Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: -10 }}></Text>)
            }
          </TouchableOpacity> */}
          <Pressable style={{
            backgroundColor: '#0B0E15',
            width: 110,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5
          }}>
            <Image source={require('../assets/icons/address.png')} />
            <Text style={{
              color: 'white',
              fontSize: 10
            }}>Address</Text>
          </Pressable>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
      }}>
        <Pressable style={{
          backgroundColor: '#0B0E15',
          width: 80,
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5
        }}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold'
          }}>{carts.prices[0].size}</Text>
        </Pressable>
        <Text style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontWeight: 'bold',
          fontSize: 18
        }}><Text style={{
          color: '#C87138',
          fontWeight: 'bold',
          fontSize: 18
        }}>$ </Text>{carts.prices[0].price}</Text>
        <Pressable onPress={() => {
          // if (quantity > 0) {
          //   setQuantity(quantity-1);
          // }
        }} style={{
          backgroundColor: '#DF7231',
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>-</Text>
        </Pressable>
        <Text style={{
          // backgroundColor:'',
          width: 80,
          height: 30,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#DF7231',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white'
        }}>{carts.prices[0].quantity}</Text>
        <Pressable onPress={() => {
          // if (quantity>=0) {
          //   setQuantity(quantity+1);
          // }
        }} style={{
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
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
      }}>
        <Pressable style={{
          backgroundColor: '#0B0E15',
          width: 80,
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5
        }}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold'
          }}>{carts.prices[1].size}</Text>
        </Pressable>
        <Text style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontWeight: 'bold',
          fontSize: 18
        }}><Text style={{
          color: '#C87138',
          fontWeight: 'bold',
          fontSize: 18
        }}>$ </Text>{carts.prices[1].price}</Text>
        <Pressable onPress={() => {
          // if (quantity > 0) {
          //   setQuantity(quantity-1);
          // }
        }} style={{
          backgroundColor: '#DF7231',
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>-</Text>
        </Pressable>
        <Text style={{
          // backgroundColor:'',
          width: 80,
          height: 30,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#DF7231',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white'
        }}>{carts.prices[1].quantity}</Text>
        <Pressable onPress={() => {
          // if (quantity>=0) {
          //   setQuantity(quantity+1);
          // }
        }} style={{
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
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
      }}>
        <Pressable style={{
          backgroundColor: '#0B0E15',
          width: 80,
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5
        }}>
          <Text style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold'
          }}>{carts.prices[2].size}</Text>
        </Pressable>
        <Text style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontWeight: 'bold',
          fontSize: 18
        }}><Text style={{
          color: '#C87138',
          fontWeight: 'bold',
          fontSize: 18
        }}>$ </Text>{carts.prices[2].price}</Text>
        <Pressable onPress={() => {
          // if (quantity > 0) {
          //   setQuantity(quantity-1);
          // }
        }} style={{
          backgroundColor: '#DF7231',
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>-</Text>
        </Pressable>
        <Text style={{
          // backgroundColor:'',
          width: 80,
          height: 30,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#DF7231',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white'
        }}>{carts.prices[2].quantity}</Text>
        <Pressable onPress={() => {
          // if (quantity>=0) {
          //   setQuantity(quantity+1);
          // }
        }} style={{
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
  );
  return (
    <View style={{
      backgroundColor: '#0B0E15',
      height: windowHeight
    }}>
      <View style={{
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15
      }}>
        <Pressable style={{
          backgroundColor: '#0B0E15',
          width: 30,
          height: 30,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          backgroundColor: 'white'
        }}>
          <Image style={{ width: 15, height: 15 }} source={require('../assets/icons/menu.png')} />
        </Pressable>
        <Text style={{
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
        }}>Cart</Text>
        <Pressable style={{
          backgroundColor: '#0B0E15',
          width: 30,
          height: 30,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image style={{ width: 30, height: 30 }} source={require('../assets/img/Logo_Coffee.png')} />
        </Pressable>
      </View>
      <Pressable style={{
        width: 200,
        height: 50,
        backgroundColor: '#df7132',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginRight: 10,
      }} onPress={() => {
        // Order()
      }}>
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20
        }}>ORDER</Text>
      </Pressable>
      <SafeAreaView style={{ paddingHorizontal: 10, marginBottom: 190 }}>
        {
          (Data_Carts.length == 0) ? (
            <Text style={{
              color: 'white',
              fontSize: 18,
              padding: 10,
              textAlign: 'center'
            }}>Bạn chưa thêm sản phẩm vào giỏ hàng?</Text>
          ) : (
            (isLoading) ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={Data_Carts}
                renderItem={({ item }) => {
                  // console.log(obj);
                  return <Cart carts={item} />
                }}
                keyExtractor={item => item.id}
              />
            )
          )
        }
      </SafeAreaView>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100
  },
})