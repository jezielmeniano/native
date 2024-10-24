import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';

const HeheExp = () => {
  const [fullName, setFullName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Link href="/" style={styles.retu}> &#60;</Link>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        <Text style={styles.cNewAcc}>{'\n'}Create new account{'\n'}</Text>

        <TextInput
          style={styles.fullName}
          onChangeText={setFullName}
          placeholder="Full-Name"
          value={fullName}
        />
        <TextInput
          style={styles.phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
        />
        <TextInput
          style={styles.emailAddress}
          onChangeText={setEmail}
          placeholder="E-mail Address"
          keyboardType="email-address"
          value={email}
        />
        <TextInput
          style={styles.password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
        />

        <Text>{'\n'}</Text>
        <Link style={styles.signUppp} href="user/signUpSuc">Sign Up</Link>
      </View>
    </SafeAreaView>
  );
};

export default HeheExp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  retu: {
    fontSize: 40,
    color: '#EF6C7A',
  },
  cNewAcc: {
    fontSize: 23,
    marginLeft: 20,
  },
  fullName: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
    paddingLeft: 30,
  },
  phoneNumber: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
    paddingLeft: 30,
  },
  emailAddress: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
    paddingLeft: 30,
  },
  password: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
    paddingLeft: 30,
  },
  signUppp: {
    backgroundColor: '#EF6C7A',
    justifyContent: 'center',
    textAlign: 'center',
    width: 300,
    borderWidth: 3,
    borderColor: '#EF6C7A',
    marginLeft: 30,
    color: 'white',
    marginTop: 15,
    borderRadius: 50,
    fontSize: 20,
  },
});
