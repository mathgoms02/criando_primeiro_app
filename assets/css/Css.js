import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: '10%',
    },
    container2:{
      flex: 1,
    },
    button_home:{
      height: 70,
      width: 70,
    },
    textPage:{
        backgroundColor: 'orange',
        padding:20,
    },
    darkbg:{
      backgroundColor: '#333',
    },
    login_logomarca:{
      marginBottom:10,
    },
    login_msg:(text='none')=>({
      fontWeight: 'bold',
      fontSize: 22,
      color: 'red',
      marginTop: 10,
      marginBottom: 15,
      display: text
    }),
    login_form:{
      width: "80%"
    },
    login_input:{
      backgroundColor: '#fff',
      fontSize: 19,
      padding: 7,
      marginBottom: 15,
      width: 300
    },
    login_button:{
      padding: 12,
      backgroundColor: '#F58634',
      alignSelf: 'center',
      borderRadius: 5
    },
    login_buttonText:{
      fontWeight:'bold',
      fontSize: 22,
      color: '#333'
    }
  });
export{css};
