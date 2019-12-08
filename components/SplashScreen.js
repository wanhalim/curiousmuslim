import React, { Component } from 'react';
import firebase from '../fb'
import {Text, Alert, StyleSheet, View, Image, ImageBackground} from 'react-native'

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
      <ImageBackground source={require('../image/BACKGROUND.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
        <View style={styles.semua}>
          <Image style={{width: 200, height: 200}} source={require('../image/appslogo2.png')} />
        </View>
        </ImageBackground>
    )
}
}


const styles = StyleSheet.create({
  semua: {
      
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
});


export default (SplashScreen);