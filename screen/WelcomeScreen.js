import { StyleSheet, Text, View, ImageBackground, Button, Alert, Dimensions } from 'react-native'
import React from 'react'

const WelcomeScreen = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{width:windowWidth, height:windowHeight}}>
        <ImageBackground source={require('../assets/img/Background_Welcome.png')} resizeMode='cover' style={styles.image}>
            <Text style={styles.textSlogan}>Coffee so good, your taste buds will love it.</Text>
            <Text style={styles.textContent}>The best grain, the finest roast, the powerful flavor.</Text>
            <View style={{width:'100%', marginTop:35, flex:1, flexDirection:'row', justifyContent:'space-evenly'}}>
                <Text style={styles.textButton} onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
                <Text style={styles.textButton} onPress={() => navigation.navigate('RegisterScreen')}>Register</Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width:'100%',
        height:'100%'
    },
    textSlogan: {
        color:'white',
        fontSize: 34,
        width:250,
        alignSelf:'center',
        textAlign:'center',
        marginTop:440
    },
    textContent: {
        color:'#A9A9A9',
        fontSize: 14,
        width:250,
        alignSelf:'center',
        textAlign:'center'
    },
    textButton: {
        color:'white',
        fontSize: 18
    }
})