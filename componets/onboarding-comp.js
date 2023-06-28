import {  StyleSheet, Text , View } from 'react-native'
import { Image } from 'expo-image';
import { Link, useRouter } from "expo-router";
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { useState } from 'react';




export default function OnBoardingeComp(){
    const router = useRouter()
    function handlenavigation(){
        router.replace('index')
    }

    


    return (
      <View style={styles.container}>
            <Image
                style={styles.image}
                source="https://cdn.wallpapersafari.com/68/69/m6aBFb.jpg"
                contentFit="cover"
            />

             <View style={styles.overlay} >
                {/* EMPTY VIEW TO OVERLAY OVER THE IMAGE TO MAKE IT DARKER */}
            </View>

            <View style={styles.welcomeHeader} >
                <Text style={styles.welcome} >Welcome{'\n'}to</Text>
                <Text style={styles.listly} >Listly</Text>
            </View>
          
            <View style={styles.ctaContainer} >
                <View style={styles.ctaText} >
                    <Text style={styles.bigHeader} >List It To{'\n'}Remember It</Text>
                    <Text style={styles.text} >Keep track of important things that you{'\n'}need to get done in one place</Text>
                </View>

                <View style={styles.ctaButton}   >
                    <Text style={styles.buttonText} onPress={handlenavigation}  >Get Started</Text>
                </View>
            </View>
      </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    welcomeHeader:{
        width: '100%',
        height: 300,
        marginTop:200,
    },
    welcome:{
        fontWeight:'300',
        color:'#ffffff',
        fontSize: 100,
        textAlign: 'left',
    },
    listly:{
        color:'#C8EFF0',
        fontSize: 100,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    image: {
        width:'100%',
        height:'100%',
        position:'absolute',
    },
    overlay:{
        opacity:0.7,
        width: "100%",
        height: "100%",
        backgroundColor:'#000000',
        position: "absolute",
    },
    ctaContainer:{
        backgroundColor:'#ffffff',
        height:'35%',
        width:'100%',
        position:'absolute',
        bottom:0 ,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,   
    },
    ctaText:{
        alignItems: "center",
        width:'100%',
        textAlign:'center',
    },
    bigHeader:{
        textAlign:'center',
        fontSize:70,
        fontWeight:'bold',
        margin:20
    },
    text:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'regular',
        color:'#8B8B8B'
    },
    ctaButton:{
        marginTop:20,
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:'#000000',
        width:'80%',
        height:70,
        borderRadius:20,
        justifyContent: 'center',
    },
    buttonText:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:30,
        fontWeight:'bold',
    }
})