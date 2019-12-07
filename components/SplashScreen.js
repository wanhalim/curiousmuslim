import React, { Component } from 'react';
import firebase from '../fb'
import {Text, Alert, StyleSheet, View, Image} from 'react-native'

class SplashScreen extends Component {
    
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{

        
            if(user){
                this.props.navigation.navigate('CategoriesScreenUstaz')
            }
            else {
              this.props.navigation.navigate('Home')
            }
        
        
    })
}


render(){
    return (
        <View style={styles.semua}>
          <Image style={{width: 100, height: 100}} source={require('../image/test.png')} />
        </View>
    )
}
}


const styles = StyleSheet.create({
  semua: {
      
    flex: 1,
    backgroundColor: '#04917B',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
});


export default (SplashScreen);