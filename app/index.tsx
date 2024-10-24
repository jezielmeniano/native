import { View, Text, Button, Pressable,TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { StyleSheet } from 'react-native'

const index = () => {
  function myTouch(){
    styles.myTouch
    alert("Sign Up Page");
  }
  function logNPg(){
    styles.myTouch
    alert("Log In Page");
  }
  return (
    <View>
      <Text style={styles.sayHello2newApp}>Say hello to your new{'\n'}app{'\n\n'}</Text>
      <Link onPress={logNPg} style={styles.logIn} href={"/users/1"}>Login</Link>  
      <Link  onPress={myTouch} style={styles.signUp} href={"user/saylon"}>Sign Up</Link>
      
   
    </View>
  )
}


export default index
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logIn: {
    backgroundColor:'',
    justifyContent:'center',
    textAlign:'center',
    width:300,
    borderWidth:3,
    borderColor:'#EF6C7A',
    marginLeft:50,
    color:'#EF6C7A',
    marginTop:15,
    borderRadius:50,
    fontSize:20,
    
  },
  sayHello2newApp:{
    marginTop:200,
    textAlign:'center',
    color:'#EF6C7A',
    fontSize:25
  },
  myTouch:{
  color:'green',
  
  },
    signUp: {
      borderWidth:3,
      justifyContent:'center',
      textAlign:'center',
      width:300,
    borderColor:'#EF6C7A',
      marginLeft:50,
      marginTop:20,
      color:'#EF6C7A',
      borderRadius:50,
      fontSize:20
    },
    
});

