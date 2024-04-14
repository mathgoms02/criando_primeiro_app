import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, TextInput, Platform } from 'react-native';
import {css} from '../assets/css/Css';


export default function Login(){

    const [display, setDisplay]=useState('none');

    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login_logomarca}>
                <Image source={require('../assets/img/SK_mini.png')}/>
            </View>
            <View>
                <Text style={css.login_msg(display)}>usuário ou senha inválidos!</Text>
            </View>


            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder='Usuário:'/>
                <TextInput style={css.login_input} placeholder='Senha:' secureTextEntry={true}/>
                <TouchableOpacity style={css.login_button} onPress={()=>setDisplay('flex')}>
                    <Text style={css.login_buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}