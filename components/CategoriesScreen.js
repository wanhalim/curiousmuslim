import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class CategoriesScreen extends Component {

     
    render() {
        return(

            
            <View style={styles.semua}>
               <View style={{ alignItems:'center'}}>
                <Text></Text>
               <Text style={{ color:'white', fontFamily: 'monospace'}}>CHOOSE YOUR CATEGORY OF QUESTION</Text>
               </View>
               <Text></Text><Text></Text><Text></Text>
                <Button
                color='#065C50'
          title="Qur'an & hadith"
          onPress={() => this.props.navigation.navigate('DoneQuranHadith')}
          />
          <Text></Text>
          <Button
                color='#065C50'
          title="Fiqh"
          onPress={() => this.props.navigation.navigate('DoneFiqh')}
          />
          <Text></Text>
          <Button
                color='#065C50'
          title="Tawheed"
          onPress={() => this.props.navigation.navigate('DoneTawheed')}
          />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    semua: {
        backgroundColor: '#04917B',
        flex: 1
       
        
      },



});