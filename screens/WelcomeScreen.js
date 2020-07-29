import * as React from 'react';
import {Text,View,StyleSheet,FlatList,KeyboardAvoidingView,TextInput,Alert,TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId: '',
            password: ''
        }
    }

    userSignIn =(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password).then((response)=>{
            return Alert.alert('SignIn is Successfull')
        })
        .catch(function(error){
            var errorCode =error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    }

    userLogin =(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then((response)=>{
            return Alert.alert('Login Successfull')
        })
        .catch(function(error){
            var errorCode =error.code;
            var errorMessage =error.message;
            return Alert.alert(errorMessage);
        })
    } 

    render(){
        return(
            <View style ={styles.container}>
                <TextInput
                style ={styles.loginInbx}
                placeholder='Please enter your emailId'
                keyboardType= 'email-address'
                onChangeText={(text)=>{
                    this.setState({
                        emailId: text
                    })
                }}
                />

                <TextInput
                placeholder ='Please enter your password'
                secureTextEntry ={true}
                onChangeText={(text)=>{
                    this.setState({
                        password: text
                    })
                }}
                />
                <TouchableOpacity style ={styles.Btn}
                onPress ={()=>{
                    this.userLogin(this.state.emailId, this.state.password)
                }}>
                    <Text style ={styles.loginInBtn}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.btn2}
                onPress ={()=>{
                    this.userSignIn(this.state.emailId, this.state.password)
                }}>
                    <Text style ={styles.signInBtn}> Sign In </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    loginInbx:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'black',
        margin:10,
        paddingLeft:10,
    },
    Btn:{
        width:300,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        backgroundColor:'black',
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:8
        },
        shadowOpacity:0.3,
        shadowRadius:10.32,
        elevation:16
    },
    loginInBtn:{

    }
})