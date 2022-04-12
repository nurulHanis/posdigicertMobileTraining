import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
} from 'react-native';

import { stylesInput } from '../styles'; 

export const LandingPage = () => {

    const [textName,setNameText] = useState('')
    const textUpdate = (text) => {
        setNameText(text)
    }
   const [textAge,setNameAge] = useState('')
   const textUpdateAge = (textAge) => {
        setNameAge(textAge)
    }
    return(
        <SafeAreaView style = {stylesInput.mainContainer}>
         <View style={stylesInput.container}>
            <Text style = {stylesInput.titleText}>Welcome to</Text>
            <Text style = {stylesInput.titleText}>Awesome Training {"\n"}{"\n"}</Text>
            <Text style = {stylesInput.title}>Name: {textName}</Text>
                <TextInput
                       style={stylesInput.input}
                       onChangeText={textUpdate}
                       value={textName}
                 />
                <Text style = {stylesInput.title}>Age: {textAge}</Text>
                    <TextInput
                           style={stylesInput.inputAge}
                           onChangeText={textUpdateAge}
                           value={textAge}
                           keyboardType="numeric"
             />
             <Text style = {stylesInput.footer}>Pos Digicert Sdn Bhd</Text>
         </View>
        </SafeAreaView>
        
    )
}