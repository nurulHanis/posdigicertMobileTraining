import React, { useState } from "react";
import axios from "axios";
import {View,Text,TextInput,TouchableOpacity,ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { stylesInput } from '../../styles'; 
import { setEnglish } from "../../redux/settingSlice";
import { setBahasa } from "../../redux/settingSlice";


export const AddItem = () => {

    const count = useSelector(state => state.settingSlice)
    const dispatch = useDispatch()
    const lang = count.language

     console.log("Value : ", lang);
    const [isLoading,setLoading] = useState(false);

    const [addForm,setAddForm] = useState({
        first_name :'',
        last_name :'',
        email_value : '',
    });
 
    const updateFromInput = (value, state) => {
        const clonedState = {...addForm};
        clonedState[state] = value;

        setAddForm(clonedState);
    };

    const addItemApi = () => {

        setLoading(true);
        var formBody = [];
        for (var property in addForm) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(addForm[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        axios.post('https://dev-msid.posdigicert.com.my/APIEX/test_add_new', 
        formBody,{
            headers:{
                Token :'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
                'Content-Type':'application/x-www-form-urlencoded',
            },
        })
        .then (res => {
            console.log('res:' , res.data);
            setTimeout ( () => {
                setLoading(false);
            },2000)
           
            Alert.alert('Success','Success',[
                {text:'OK',}
            ])
        })
        .catch(error => {
            console.log('error:' , error);
            setTimeout ( () => {
                setLoading(false);
            },2000)
            Alert.alert('Failed','Failed',[
                {text:'OK',}
                
            ])
        });
    }
    
    return (       
        isLoading ?
        <View style={stylesInput.activityIndicator}>
            <ActivityIndicator size="large"> 
            </ActivityIndicator>
            <Text>Please wait..</Text>  
        </View>
        :
        <View style={stylesInput.container}>
            <Text>{lang.first_name}</Text>
            <TextInput
                style={stylesInput.input}
                onChangeText={value => updateFromInput(value,'first_name')}
                value={addForm.first_name}
                placeHolder="Enter Your First Name :"
            />
            <Text>Last Name</Text>
            <TextInput
                style={stylesInput.input}
                onChangeText={value => updateFromInput(value,'last_name')}
                value={addForm.last_name}
                placeHolder="Enter Your Last Name :"
            />
            <Text>Emel</Text>
            <TextInput
                style={stylesInput.input}
                onChangeText={value => updateFromInput(value,'email_value')}
                value={addForm.email_value}
                placeHolder="Enter Your Email :"
            />
            <TouchableOpacity style={stylesInput.addListBtn} onPress={() => dispatch(setEnglish())} >
                <Text>Set to English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesInput.addListBtn} onPress={() => dispatch(setBahasa())} >
              <Text>Set to Bahasa</Text>
            </TouchableOpacity>

        </View>
   
    )
}
