import React  from 'React';
import PropTypes from 'prop-types';

import {View , Text}  from 'react-native';

import styles  from './styles'
export default class Container extends  React.Component
{

    constructor(props)
    {
        super(props)
    }

     render() {
    return (
        <View  style={styles.container}>
        {this.props.children}
        <Text  style =  {styles.text}>
               slskdnslkndklasndsasd
               {this.props.username}
        </Text>

    </View>
    )
     }

}



Container.propTypes = 
{

    children : PropTypes.element
}

//export default Container;