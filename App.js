

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
        console.log('Age : ', textAge)

        setNameAge(textAge)
    }
    return(
        <SafeAreaView style = {styles.mainContainer}>
         <View style={styles.container}>
            <Text style = {styles.titleText}>Welcome to</Text>
            <Text style = {styles.titleText}>Awesome Training {"\n"}{"\n"}</Text>
            <Text style = {styles.title}>Name: {textName}</Text>
                <TextInput
                       style={styles.input}
                       onChangeText={textUpdate}
                       value={textName}
                 />
                <Text style = {styles.title}>Age: {textAge}</Text>
                    <TextInput
                           style={styles.inputAge}
                           onChangeText={textUpdateAge}
                           value={textAge}
                           keyboardType="numeric"
                           placeholder="useless placeholder"
             />
             <Text style = {styles.footer}>Pos Digicert Sdn Bhd</Text>
         </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    container:{
        backgroundColor : '#ECF0F1',
        flex:1,
        //justifyContent:'space-between',
        //alignItems: 'center',
    },
    title:{
        fontSize: 20,
        color: 'black',

    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold",
      color: 'black',
      textAlign:'center',
    },
    input: {
       height: 40,
       margin: 12,
       borderWidth: 1,
       padding: 10,
     },
    inputAge: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        width:50,
      },
      footer: {
        fontSize: 30,
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor:'red',
        height:80,
        alignItems:'center',
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
        textAlign:'center',
      },
});


