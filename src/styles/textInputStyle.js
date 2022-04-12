
import {
  StyleSheet,
} from 'react-native';

const defaultTitle ={
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
    textAlign:'center',
};

export const stylesInputText = StyleSheet.create({
    title:defaultTitle,
    titleText:{
        ...defaultTitle,
        fontSize: 20,
        color: 'blue',
    },
    inputAge: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        width:50,
      },
});