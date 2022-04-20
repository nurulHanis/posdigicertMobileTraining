
import {
  StyleSheet,
} from 'react-native';

export const stylesInput = StyleSheet.create({
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
      fontSize: 20,
      color: 'black',
      textAlign: 'center',
    },
    input: {
       height: 40,
       margin: 12,
       borderWidth: 1,
       padding: 10,
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
    addListBtn:{
      backgroundColor : '#FFFFFF',
      alignItems:'center',
      padding:10

    }
});