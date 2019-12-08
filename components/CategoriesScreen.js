import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';



export default class CategoriesScreen extends Component {

     
    render() {
        return(
            
            <ImageBackground source={require('../image/BACKGROUND.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
                <View style={{flex:1, padding:10, marginLeft:10}}>
                <Text></Text><Text></Text><Text></Text><Text></Text>
               <Text style={{ color:'white',  fontSize:20}}>CHOOSE YOUR CATEGORY OF QUESTION</Text>
            <View style={styles.semua}>
               <View style={{ alignItems:'center'}}>
                
               </View>
               <Text></Text><Text></Text><Text></Text>
                <Button
                color='#264078'
                style={{}}
          title="Qur'an & hadith"
          onPress={() => this.props.navigation.navigate('DoneQuranHadith')}
          />
          <Text></Text><Text></Text><Text></Text>
          <Button
                color='#264078'
          title="Fiqh"
          onPress={() => this.props.navigation.navigate('DoneFiqh')}
          />
          <Text></Text><Text></Text><Text></Text>
          <Button
                color='#264078'
          title="Tawheed"
          onPress={() => this.props.navigation.navigate('DoneTawheed')}
          />
                
            </View></View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    semua: {
        
        
        padding: 50,
        
        
      },



});