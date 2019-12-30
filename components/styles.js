import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Text, View , Button } from 'react-native';

// export default EStyleSheet.create({

//     container :
//     {
//         flex : 1,
//         alignItems : 'center',
//         backgroundColor : 'gray'
//     }

// })

const styles = EStyleSheet.create({
  container: {
  
    backgroundColor:  '#FFEB3B' // <-- value as a function
  },
  text: {
    color: 'red',                            // global variable $textColor
    fontSize: '1.5rem'                              // relative REM unit
  }
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding : 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor : 'red'
//   },
//    padding :
//   {
//     marginTop : 40
//   }
// });



export default styles;