import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.headBackground}/>
       
       <KeyboardAvoidingView  behavior={"position"}>
       <View>
         <Text style={styles.logo}>UDAC</Text>
         <Text style={styles.logoDescription}>Property & Tax Survey</Text>
       </View>
       <ScrollView>
         <View style={styles.loginArea}>
          <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
          <Text style={styles.loginAreaDescription}> 
            Unique Door No Easily Fill Your Entire Property Tax Using App
          </Text>  
          <LoginForm/>
         </View>
       </ScrollView>
       <View style={styles.signUpArea}>
          <Text style={styles.signUpDescription} >Don't have an account ? </Text>
          <TouchableOpacity>
              <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
       </View>
       </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical: 80
  },
 headBackground: {
  position: 'absolute',
  top: 0,
  left: 0,
  height: 250,
  width: '100%',
  backgroundColor: '#1572de'
 },
 logo: {
   textAlign: 'center',
   fontSize: 40,
   fontWeight: 'bold',
   color: '#FFFFFF'
 },
 logoDescription:{
   textAlign: 'center',
   color: '#FFFFFF'

 },
 loginArea: {
   marginHorizontal:40,
   marginVertical: 40,
   backgroundColor: '#FFFFFF',
   padding: 20,
   borderRadius:5,

   shadowColor: 'black',
   shadowOpacity: .2,
   shadowRadius: 3,
   shadowOffset : {
     width: 0,
     height: 2,
   },
   elevation: 4
 },
 loginAreaTitle: {
     color: 'black',
     fontSize: 20,
     textAlign: 'center',
 },
 loginAreaDescription: {
     fontSize: 12,
     color: '#7e868f',
     marginVertical: 10,
     textAlign: 'center',
 },
 signUpArea: {
     alignItems: 'center',
 },
 signUpDescription: {
     color: '#999'
 },
 signUpText: {
     color: '#666'
 }

});
