//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Button, FlatList, TouchableHighlight, Dimensions, TextInput, ActivityIndicator, Image, ImageBackground} from 'react-native';
import {getBlogs, deleteBlog} from '../actions';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import firebase from 'firebase';
import CategoriesScreenUstaz from './CategoriesScreenUstaz';



const {width: WIDTH} = Dimensions.get('window')


class HomeScreen extends Component {

    constructor(props)
    {
      super(props);
      
      this.state = {email:'', password:'', error:'', loading:false, authenticated: false};
      
    }
   
    

   onLoginPress(){
     this.setState({error:'', loading:true});
   
     const{email, password} = this.state;
   
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(() => {
       this.setState({error:'', loading:false});
       this.props.navigation.navigate('CategoriesScreenUstaz');
     })
     .catch(() =>{
       this.setState({error:'Authentication failed', loading:false})
     })
   
   }
   
   renderButtonOrLoading(){
     if(this.state.loading){
       return  <ActivityIndicator size="large" color="#00C2D5" />
     }
     return <View>
       <Button 
       title="Sign In as Ustaz"
                    
       color='#264078'
         onPress={this.onLoginPress.bind(this)}>
         
       </Button>
       
     </View>
   }
   
       render() {
        
           return(
            <ImageBackground source={require('../image/BACKGROUND.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
             <View style={styles.semua}>
                   
                   <View style={styles.test1}>
   <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
                  <Image style={{width: 120, height: 120}} source={require('../image/appslogo2.png')} />
   <Text></Text>
                   
                   
                   <Text style={styles.title}> CURIOUS MUSLIM </Text>
   
                    </View>
   
                    
   
                      <View style={styles.test2 }>
   
                       <TextInput
                       value = {this.state.email}
                       onChangeText = {email => this.setState({email})}
                       style= {styles.input}
                       placeholder={'Email'}
                       underlineColorAndroid='transparent'
                       

                       />
                       <Text></Text>
                       <TextInput
                       value = {this.state.password}
                       onChangeText = {password => this.setState({password})}
                       style= {styles.input}
                       placeholder={'Password'}
                       secureTextEntry={true}
                       />
                       <Text></Text>
                       <Text>{this.state.error}</Text>
                       {this.renderButtonOrLoading()}
                     <Text></Text>
                     
                      
                    <Button 
                      title="Ask as anonymous"
                      color='#264078' 
                      
                      onPress={() => this.props.navigation.navigate('CategoriesScreen')}
                     />
                     
   
                      </View>
   
               </View>
   
               </ImageBackground>
           );
       }
   }
  
   const styles = StyleSheet.create({
       semua: {
           
         flex: 1
        
         
       },
       test1: {
         backgroundColor: 'transparent',
         
         alignItems: 'center',
         flex: 1
       },
       test2: {
         backgroundColor: 'transparent',
         flex: 1,
         
         alignItems: 'center',
       },
       title: {
         
         fontSize: 30,
         
         color: 'white'
       },
        input: {
          width: WIDTH - 55,
          
          height: 45,
          borderRadius: 25,
          fontSize: 16,
          paddingLeft: 45,
          backgroundColor: 'rgba(0,0,0,0.35)',
          color: 'rgba(255,255,255,0.7)',
          marginHorizontal: 25, fontFamily: 'monospace'
   
        }
     });
   
   


export default (HomeScreen);
