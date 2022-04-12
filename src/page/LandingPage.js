import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
} from 'react-native';

import { formInputStyle,textInputStyle } from '../styles'; 

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
        <SafeAreaView style = {formInputStyle.mainContainer}>
         <View style={formInputStyle.container}>
            <Text style = {textInputStyle.titleText}>Welcome to</Text>
            <Text style = {textInputStyle.titleText}>Awesome Training {"\n"}{"\n"}</Text>
            <Text style = {textInputStyle.title}>Name: {textName}</Text>
                <TextInput
                       style={textInputStyle.input}
                       onChangeText={textUpdate}
                       value={textName}
                 />
                <Text style = {textInputStyle.title}>Age: {textAge}</Text>
                    <TextInput
                           style={textInputStyle.inputAge}
                           onChangeText={textUpdateAge}
                           value={textAge}
                           keyboardType="numeric"
             />
             <Text style = {textInputStyle.footer}>Pos Digicert Sdn Bhd</Text>
         </View>
        </SafeAreaView>
    )
}