import { Dimensions, FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetailsScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const DATA_Size = [
        {
            id: '1',
            size: '100g',
        },
        {
            id: '2',
            size: '200g',
        },
        {
            id: '3',
            size: '500g',
        },
    ]
    const Size = ({ size }) => (
        <View style={{
            width: 90,
            height: 40,
            backgroundColor: 'rgba(69, 72, 79, 0.3)',
            marginHorizontal: 15,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',

            }}>{size}</Text>
        </View>
    );
    return (
        <View style={{ backgroundColor: '#0B0E15' }}>
            <ImageBackground resizeMode='cover' style={{
                width: windowWidth,
                height: 390,
                justifyContent: 'space-between'
            }} source={require('../assets/img/item2.png')}>
                <View style={{
                    width:windowWidth,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}>
                    <Pressable style={{
                        backgroundColor: 'rgba(27, 27, 30, 0.6)',
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        margin: 20,
                    }}>
                        <Image source={require('../assets/icons/arrow.png')}/>
                    </Pressable>
                    <View style={{
                        backgroundColor: 'rgba(27, 27, 30, 0.8)',
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                        margin: 20,
                    }}>
                        <Text style={{
                            color: 'red',
                            fontSize: 20,
                        }}>❤</Text>
                    </View>
                </View>
                <View style={{
                    width: windowWidth,
                    height: 150,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        padding: 20
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
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                }}>Size</Text>
                <SafeAreaView style={{ alignItems: 'center', marginVertical: 10 }}>
                    <FlatList
                        horizontal
                        data={DATA_Size}
                        renderItem={(obj) => {
                            // console.log(obj);
                            return <Size size={obj.item.size} />
                        }}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 20,
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: 14
                        }}>Price</Text>
                        <Text style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontWeight: 'bold',
                            fontSize: 21
                        }}><Text style={{
                            color: '#C87138',
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>$ </Text>10.5</Text>
                    </View>
                    <Pressable style={{
                        backgroundColor: '#E87531',
                        width: 220,
                        height: 50,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 21,
                            fontWeight: 'bold'
                        }}>Add to Cart</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({})