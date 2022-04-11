

import React,{useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export const App = () => {

    const [textName,setNameText] = useState('')
    const textUpdate = (text) => {
        console.log('Name : ', text)

        setNameText(text)
    }
   const [textAge,setNameAge] = useState('')
   const textUpdateAge = (textAge) => {
        console.log('Age : ', textAge)3

        setNameAge(textAge)
    }
    return(
        <SafeAreaView style = {styles.mainContainer}>
         <View style={styles.container}>
            <Text style = {styles.title}>Awesome Training</Text>
            <Text style = {styles.title}>Name: {textName}</Text>
                <TextInput
                       style={styles.input}
                       onChangeText={textUpdate}
                       value={textName}
                 />
                <Text style = {styles.title}>Age: {textAge}</Text>
                    <TextInput
                           style={styles.input}
                           onChangeText={textUpdateAge}
                           value={textAge}
             />
         </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    container:{
        backgroundColor : 'green',
        flex:1,
        //justifyContent:'space-between',
        //alignItems: 'center',
    },
    title:{
        fontSize: 30,
        color: 'black',

    },
    title2:{
        fontSize: 30,
        color: 'black',

    },
     input: {
       height: 40,
       margin: 12,
       borderWidth: 1,
       padding: 10,
     },
});


