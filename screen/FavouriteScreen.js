import { Dimensions, FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const FavouriteScreen = () => {
  const windowWidth = Dimensions.get('window').width - 20;
  const windowHeight = Dimensions.get('window').height;
  const DATA_FAVOURITE = [
    {
      id: '1',
      name: 'All',
      price: 100,
    },
    {
      id: '2',
      name: 'All',
      price: 100,
    },
    {
      id: '3',
      name: 'All',
      price: 100,
    },
    {
      id: '4',
      name: 'All',
      price: 100,
    },
    {
      id: '5',
      name: 'All',
      price: 100,
    },
  ];
  const Favourite = ({ name }) => (
    <View style={{
      backgroundColor: 'rgba(27, 27, 30, 0.8)',
      width: windowWidth,
      borderRadius: 20,
      marginVertical: 10,
    }}>
      <ImageBackground resizeMode='cover' style={{
        width: windowWidth,
        height: 300,
        justifyContent: 'flex-end',
      }} source={require('../assets/img/item2.png')} imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <View style={{
          backgroundColor: 'rgba(27, 27, 30, 0.8)',
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          position: 'absolute',
          top: 0,
          right: 0,
          margin: 20,
        }}>
          <Text style={{
            color: 'red',
            fontSize: 20,
          }}>❤</Text>
        </View>
        <View style={{
          width: windowWidth,
          height: 150,
          paddingHorizontal: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={{
            paddingVertical: 20
          }}>
            <Text style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 30
            }}>Robusta Beans</Text>
            <Text style={{
              fontSize: 24,
              color: '#DF7231'
            }}>★<Text style={{
              fontSize: 18,
              color: 'white'
            }}>4.5</Text></Text>
          </View>
          <View style={{
            width: 130,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            flexWrap: 'wrap',
            gap: 5,
          }}>
            <Pressable style={{
              backgroundColor: '#0B0E15',
              width: 50,
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
            <Pressable style={{
              backgroundColor: '#0B0E15',
              width: 50,
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
      </ImageBackground>
      <View style={{
        padding: 20,
      }}>
        <Text style={{
          color: 'white',
          fontSize: 14,
          marginBottom: 10
        }}>Description</Text>
        <ScrollView style={{
          height: 110,
          marginBottom: 10,
        }}>
          <Text style={{
            color: 'white',
            fontSize: 14,
          }}>When it comes to coffee shops, I find myself labeled an expert because I prefer studying outdoors rather than in my own house. After years of wandering to every corner of my hometown trying to find the most ideal place to study, I finally found my dream spot, it is a classical-decoration coffee shop.When it comes to coffee shops, I find myself labeled an expert because I prefer studying outdoors rather than in my own house. After years of wandering to every corner of my hometown trying to find the most ideal place to study, I finally found my dream spot, it is a classical-decoration coffee shop.</Text>
        </ScrollView>
      </View>
    </View>
  );
  return (
    <View style={{
      backgroundColor: '#0B0E15'
    }}>
      <View style={{
        height: 70,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:15
      }}>
        <Pressable style={{
          backgroundColor: '#0B0E15',
          width: 30,
          height: 30,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding:5,
          backgroundColor:'white'
        }}>
          <Image style={{width:15, height:15}} source={require('../assets/icons/menu.png')} />
        </Pressable>
        <Text style={{
          color: 'white',
          fontSize: 24,
          fontWeight:'bold',
        }}>My Favourite</Text>
        <Pressable style={{
          backgroundColor: '#0B0E15',
          width: 30,
          height: 30,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image style={{width:30, height:30}} source={require('../assets/img/Logo_Coffee.png')} />
        </Pressable>
      </View>
      <SafeAreaView style={{ paddingHorizontal: 10, paddingBottom: 140 }}>
        <FlatList
          data={DATA_FAVOURITE}
          renderItem={(obj) => {
            // console.log(obj);
            return <Favourite />
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({})