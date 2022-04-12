import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import { stylesInput } from '../styles'; 

export const NextPage = () => {

  const route = useRoute();
  console.log('route:',route.params);
  const {name,age} = route.params;

    return(
        <View style={{margin:100,padding:30}}>
            <Text style = {stylesInput.titleText}> hi, your name is {name}   </Text>
            <Text style = {stylesInput.titleText}> Ypu are {age}   </Text>
        </View>
        
    )
}