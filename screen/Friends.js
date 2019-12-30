import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import nonlogin from './nonlogin';
export default class Friends extends React.Component {
    
  render() {
       const { navigation } = this.props;
    return (
      <View >
               <Text>
                We have no friends! Friends..js
                The id is {JSON.stringify(navigation.getParam('id'))}
        </Text>
      </View>
    );
  }


   apiCall() {

      
      return fetch('http://staging.footerrant.com:8080/user-management/api/rs/v1/service/register/uuid' , 
      {
          method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
                },
            
        body : JSON.stringify()
      })

      
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

