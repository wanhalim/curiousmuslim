//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Button, FlatList, TouchableHighlight, Alert, ActivityIndicator, ImageBackground} from 'react-native';
import {DisplayQuestionTawheed, deletetawheed} from '../actions';
import {connect} from 'react-redux'
import {Icon} from 'react-native-elements';
import _ from 'lodash';


class DisplayTawheed extends Component {

 componentDidMount(){
     this.props.DisplayQuestionTawheed()
 }
  render() {
        
  return (
    <ImageBackground source={require('../image/BACKGROUND.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
   <View style={styles.container}>
     <Button title='Edit answered question' color='#264078' onPress={() => this.props.navigation.navigate('EditTawheed')}/>
     <Text></Text>
     

     {
      this.props.loadingReducer ? <ActivityIndicator size="large" color="#00ff00" /> : <FlatList style={{width:'100%'}} 
        data={this.props.listOfBlogs}
       keyExtractor={(item) => item.key}
         showsVerticalScrollIndicator={false}
         renderItem={({item}) => {if (item.answer == null) {
           
         {
           return (
          <View style={{elevation:8, marginBottom:15,borderRadius:15, padding:20}}>
        <Text style={{ marginBottom: 10, color:'white'}}>Question: {item.question}</Text>
        <Text style={{ marginBottom: 10, color:'white'}}>Answer: {item.answer}</Text>
          <Text></Text>                       
       <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:25}}>
         
       <Text style={{ color:'white', justifyContent: 'flex-start', marginRight: 220, fontSize: 12}}>{item.date}</Text>
       
      <TouchableHighlight onPress={() => this.props.navigation.navigate('AnswerQuestionTawheed',{...item})}>
       <View style={{marginRight:15}}>
       <Icon reverse color="#264078" name="create" />
          </View>
        </TouchableHighlight>   
        <TouchableHighlight  onPress={() => Alert.alert(
        'Are you sure',
        'You want to delete this?',
        [
          {text: 'NO', style: 'cancel'},
          {text: 'YES', onPress: () => this.props.deletetawheed(item.key)},
        ]
      )} >
     <View>
     <Icon reverse color="#264078" name="highlight-off"  />
        </View>
       </TouchableHighlight>   
       
                                  </View>
                            </View>
                         )
          }}
        else {


        }
        }} />
                }
               
            </View>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
        
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



export default connect(mapStateToProps, {DisplayQuestionTawheed,deletetawheed})(DisplayTawheed);
