import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppNavigator from './AppNavigator';
import styles from './components/styles'; // <-- occurs before EStyleSheet.build()

EStyleSheet.build();
export default class App extends React.Component {

  constructor(props)
  {

    super(props);
    this.props 
    this.state = {
      data : 'temp',
      loaded : false
    }
  }

 getMoviesFromApiAsync = () => {
  return fetch('http://staging.womaniya.co:8080/video/api/rs/v2/service/get/customToken' , 

  {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  ,
   body: JSON.stringify({
    authToken: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjMsImxvZ2luSWQiOjE0NywicGxhdGZvcm0iOiIiLCJpYXQiOjE1NzMyMzM5NDMsImV4cCI6MTU3ODQxNzk0M30.YMveouGohpSuFNtL1-4SpuoVkOUf6KX6FCo0VS39PAE'
  }),
  }
  )
    .then(response => response.json())
    .then(responseJson => {
      alert("response received" , responseJson)
      console.log(responseJson);

      return responseJson;
    })
    .then(data1 => {      this.setState({data : data1})
    this.setState({loaded : true})
    console.log(data1)
      })
    .catch(error => {
      console.error(error);
    });
}
 componentDidMount()
 {
   this.getMoviesFromApiAsync()
 }

  render() {
    return (
        <AppNavigator/>

    //    <View style={styles.padding}>
            
    //     <Button  title="CLICK" onPress = {this.getMoviesFromApiAsync} />
    //     <Text>
    //     {!this.state.loaded &&
        
    //       (<Text>LOADING..................</Text>)

    //     }
    //     {
    //       this.state.loaded && (
    //       this.state.data.data.token
    // )
    //           }
    //     </Text>
    //     </View>
    );
  }
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//    padding :
//   {
//     marginTop : 40
//   }
// });
