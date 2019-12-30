/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button
} from 'react-native';
import Input from '../textinput/Input';
import Container from '../components/Container'

export default class Home extends React.Component {
  render() {
    return (
      <View >
              <Text>
                We have no friends! Home.js sdns sdofsdflsdf
        </Text>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends' , {id :'ancdefghij'})
          }
        />
      <Container  username = "pulkir">
      <View/>
      </Container>
       
      <Input  buttonText  = 'TEXTINPUT'>
      </Input>
      </View>
    );
  }
}
// const App = () => {
//      const { navigation } = this.props;
//   return (
//     <Fragment>

//       <SafeAreaView>
//         <View >

//           <Text style = {styles.sectionTitle}>
//             First Text on my own
//           </Text>


//    <  Button
//           title="Add some friends"
//           onPress={() =>
//          navigation.navigate('Friends')
//           }
//         />
//         </View>
      
//         {/* <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//              <LearnMoreLinks /> 
//           </View>
//         </ScrollView> */}
//       </SafeAreaView>
//     </Fragment>
//   );
// };

const styles = StyleSheet.create({
  
  body: {
    backgroundColor: '#000',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
    
  }
});

// export default App;
