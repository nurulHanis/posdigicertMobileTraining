import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';

export const About = () => {
    const route = useRoute();

  return (
    <View style={{margin:10,padding:10}}>
        <Text style = {styles.text}>Details are: </Text>
        <Text style = {styles.text}> 
            Training : React Native Programming{"\n"}
            Date     : 11 - 12 April 2022 & 20 – 21 April 2022{"\n"}
            Time     : 10:00 am – 5:00 pm{"\n"}
            Venue    : Pos Digicert Office {"\n"} </Text>
     
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});