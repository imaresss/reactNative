import React  from 'React';
import PropTypes from 'prop-types';

import {View , Text ,TextInput}  from 'react-native';

import styles  from './styles'



export default class Input  extends React.Component
{
   
     render() {
    return (
            <View>
            <Text>{this.props.buttonText}</Text>
                <TextInput />
            </View>
    )
     }
}
