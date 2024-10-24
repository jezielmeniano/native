import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class logIn extends Component {
  render() {
    return (
      <View>
        <Link href={"/"} style={styles.ret}> &#60;</Link>
     
     <View  style={{flexDirection: 'row', alignItems: 'center'}}>
       <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
     </View>
        <Text style={styles.logNN}>logIn</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    logNN:{
        backgroundColor:'green',
        textAlign:'center',
        fontSize:100,
        marginTop:200,
        },
        
        ret:{
            fontSize:40,
            color:'#EF6C7A',
          },
    
})