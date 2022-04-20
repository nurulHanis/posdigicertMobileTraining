import { useNavigation, useTheme } from '@react-navigation/native';
import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,Button,
} from 'react-native';

import { stylesInput,stylesInputText,Pressable} from '../styles'; 

export const LandingPage = () => {

    const navigation = useNavigation();

    const [textName,setTextName] = useState('')
    const textUpdate = (text) => {
        setTextName(text)
    };

   const [textAge,setAgeText] = useState('')
   const textUpdateAge = (text) => {
     setAgeText(text)
    };
 
    const [toDoList, setToDoList] = useState([]);

    const appendTodo = ()=> {
        const arrayTodo = [...toDoList];

        arrayTodo.push(textName);
        setToDoList(arrayTodo);
        setTextName('');
    };

    return(
        <SafeAreaView style = {stylesInput.mainContainer}>
         <View style={stylesInput.container}>
            <Text style = {stylesInput.titleText}>Welcome to</Text>
            <Text style ={stylesInput.titleText}>Awesome Training {"\n"}{"\n"}</Text>
            <Text style = {stylesInput.title}>Name: {textName}</Text>
                <TextInput
                       style={stylesInput.input}
                       onChangeText={textUpdate}
                       value={textName}
                 />
                <TouchableOpacity style={stylesInput.addListBtn} onPress={appendTodo} >
                    <Text>Add item</Text>
                </TouchableOpacity>
                <Text>List of names:</Text>

            {toDoList.map((item,key) => (
                <View key={key}>
                    <Text>
                        <Text> {key+ 1} </Text>{item}
                    </Text>
                </View>
            ))}

            <Text style = {stylesInput.footer}>Pos Digicert Sdn Bhd</Text>

            
         </View>
        </SafeAreaView>

    )
}