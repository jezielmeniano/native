import { View, Text,} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'

const sayExp = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  function myTouch(){
    alert("Log In Successfully");
  }
  return (
    <View>
      <Link href={"/"} style={styles.ret}> &#60;</Link>
     
     <View  style={{flexDirection: 'row', alignItems: 'center'}}>
       <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
     </View>
      
      <Text  style={styles.signN}>{'\n'}Sign In{'\n'}</Text>

      <SafeAreaView>
      <TextInput style={styles.emOrNum} onChangeText ={onChangeText} placeholder='E-mail or phone number'/>
      <TextInput
        style={styles.passW}onChangeText={onChangeNumber} value={number} placeholder="Password" keyboardType="numeric"
      />
    </SafeAreaView>
    

  
    <Link onPress={myTouch} style={styles.logN} href={"/user/login"}>Login</Link> 
    <Text style={styles.ey}>{'\n'}OR</Text> 
    <Link style={styles.bfLink} href={"https://www.facebook.com/"}>Login with Facebook</Link> 







    </View>
  )
}

export default sayExp;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    ret:{
      fontSize:40,
      color:'#EF6C7A',
    },

    signN: {
      color:'#EF6C7A',
      fontSize:30,
      marginLeft:20,
      },

      passW: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius:50,
        paddingLeft:30        
},

emOrNum: {
  height: 40,
  margin: 12,
  borderWidth: 2,
  padding: 10,
  borderRadius:50,
  paddingLeft:30        
},

logN: {
  backgroundColor:'#EF6C7A',
  justifyContent:'center',
  textAlign:'center',
  width:300,
  borderWidth:3,
  borderColor:'#EF6C7A',
  marginLeft:30,
  color:'white',
  marginTop:15,
  borderRadius:50,
  fontSize:20
},

ey:{
  textAlign:'center',
  fontSize:18
},

bfLink: {
  backgroundColor:'#3F48CC',
  justifyContent:'center',
  textAlign:'center',
  width:300,
  borderWidth:3,
  borderColor:'#3F48CC',
  marginLeft:30,
  color:'white',
  marginTop:15,
  borderRadius:50,
  fontSize:20
},

});