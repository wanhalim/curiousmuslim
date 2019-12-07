//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Button, FlatList, TouchableHighlight, Dimensions, TextInput, ActivityIndicator, Image} from 'react-native';
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
       return  <ActivityIndicator size="large" color="#00ff00" />
     }
     return <View>
       <Button 
       title="Sign In as Ustaz"
                    
       color='#065C50'
         onPress={this.onLoginPress.bind(this)}>
         
       </Button>
       
     </View>
   }
   
       render() {
        
           return(
             <View style={styles.semua}>
                   
                   <View style={styles.test1}>
   <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
                  <Image style={{width: 100, height: 100}} source={require('../image/test.png')} />
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
                       <Text>{this.state.error}</Text>
                       {this.renderButtonOrLoading()}
                     <Text></Text>
                     
                      
                    <Button 
                      title="Ask as anonymous"
                      color='#065C50' 
                      onPress={() => this.props.navigation.navigate('CategoriesScreen')}
                     />
                     
   
                      </View>
   
               </View>
   
               
           );
       }
   }
  
   const styles = StyleSheet.create({
       semua: {
           
         flex: 1
        
         
       },
       test1: {
         backgroundColor: '#04917B',
         
         alignItems: 'center',
         flex: 1
       },
       test2: {
         backgroundColor: '#04917B',
         flex: 1,
         
         alignItems: 'center',
       },
       title: {
         fontFamily: 'monospace',
         fontSize: 30,
         fontWeight: 'bold',
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
