//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Button, FlatList, TouchableHighlight, ActivityIndicator, ImageBackground} from 'react-native';

import {DisplayQuestionTawheed} from '../actions';
import {connect} from 'react-redux'
import { Icon } from 'react-native-elements'
import _ from 'lodash';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase'



class DisplayTawheed extends Component {
   constructor(props){
       super(props)
       this.state = {
           search: ''
       }
   }


 componentDidMount(){
     this.props.DisplayQuestionTawheed()
 }

 updateSearch(text){
     this.setState({search: text});
 }

  render() {
        let filteredQuestion = this.props.listOfBlogs.filter(
            (listOfBlogs) => {
                return listOfBlogs.question.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
  return (
    <ImageBackground source={require('../image/BACKGROUND.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
   <View style={styles.container}>
       <Text></Text>
       <TextInput 
                        placeholder='     Search Question...'
                        onChangeText={(text) => this.updateSearch(text)}
                        value={this.state.search}
                        style={{borderRadius: 25,backgroundColor: 'rgba(0,0,0,0.35)',
                        color: 'rgba(255,255,255,0.7)', marginBottom: 20}}
                    />
     {
      this.props.loadingReducer ? <ActivityIndicator size="large" color="#00C2D5" /> : 
      <FlatList style={{width:'100%'}} 
        data={filteredQuestion}
       keyExtractor={(item) => item.key}
         showsVerticalScrollIndicator={false}
         renderItem={({item}) => {if(item.answer != null) {{
           return (
          <View style={{elevation:8, marginBottom:15,borderRadius:15, padding:20, borderWidth:10}}>
        <Text style={{ marginBottom: 10,color:'white'}}>Question: {item.question}</Text>
        <Text style={{ marginBottom: 10,color:'white'}}>Answer: {item.answer}</Text>
        <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:25}}>
       <Text style={{ color:'white', fontSize: 12}}>{item.date}</Text>
       </View>
                                 
       
                            </View>
                         )
         }}
        else{

            
        }
        }} />
                }
               
               <View style={{flexDirection:'row', justifyContent:'center', backgroundColor: 'transparent',width: 60,  
height: 60,   
borderRadius: 30,            
backgroundColor: 'green',                                    
position: 'absolute',                                          
bottom: 10,                                                    
right: 10, }}>
                
       
        <Icon reverse color='#264078' name="create" onPress={() => this.props.navigation.navigate('QuestionTawheed')}/>
          
          
        </View>
            </View>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: 'transparent',
        padding:10
    },
});

function mapStateToProps(state){

    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
        return {
            ...val,
            key:key
        }
    })

    return {
        listOfBlogs,
        loadingReducer:state.loadingReducer.loadingReducer
        
    }
}



export default connect(mapStateToProps, {DisplayQuestionTawheed})(DisplayTawheed);
