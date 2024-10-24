import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default class signUpSuc extends Component {
  render() {
    return (
      <View>
          <Link href={"/"} style={styles.ret}> &#60;</Link>
     
     <View  style={{flexDirection: 'row', alignItems: 'center'}}>
       <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
     </View>
        <Text style={styles.kk}>Sign Up Successfully</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
kk:{
    backgroundColor:'brown',
    textAlign:'center',
    fontSize:50,
    marginTop:200,
}
,
ret:{
    fontSize:40,
    color:'#EF6C7A',
  },

})