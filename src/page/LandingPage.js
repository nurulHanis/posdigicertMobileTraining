import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

import { stylesInput } from '../styles'; 

export const LandingPage = () => {

   
    const navigation = useNavigation();

    const [textName,setTextName] = useState('')
    const textUpdate = (text) => {
        setTextName(text)
    }
   const [textAge,setAgeText] = useState('')
   const textUpdateAge = (text) => {
     setAgeText(text)
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
                           style={stylesInput.input}
                           onChangeText={textUpdateAge}
                           value={textAge}
                           keyboardType="numeric"
                    />

            <Button
            onPress={() => navigation.navigate('Second Page',{
                name:textName,
                age:textAge,
            })}
            title="Learn More"
           
            />

             <Text style = {stylesInput.footer}>Pos Digicert Sdn Bhd</Text>

            
         </View>
        </SafeAreaView>

    )
}