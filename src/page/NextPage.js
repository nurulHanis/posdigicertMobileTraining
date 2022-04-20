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
        <View style={{margin:10,padding:10}}>
            <Text style = {stylesInput.titleText}> Hi, your name is {name}   </Text>
            <Text style = {stylesInput.titleText}> You are {age}   </Text>
        </View>
        
    )
}