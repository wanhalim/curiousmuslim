//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Button, FlatList, TouchableHighlight, Alert, ActivityIndicator} from 'react-native';
import {DisplayQuestionTawheed, deletetawheed} from '../actions';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';


class DisplayTawheed extends Component {

 componentDidMount(){
     this.props.DisplayQuestionTawheed()
 }
  render() {
        
  return (
   <View style={styles.container}>
     <Button title='Edit answered question' color='#065C50' onPress={() => this.props.navigation.navigate('EditTawheed')}/>
     <Text></Text>
     

     {
      this.props.loadingReducer ? <ActivityIndicator size="large" color="#00ff00" /> : <FlatList style={{width:'100%'}} 
        data={this.props.listOfBlogs}
       keyExtractor={(item) => item.key}
         showsVerticalScrollIndicator={false}
         renderItem={({item}) => {if (item.answer == null) {
           
         {
           return (
          <View style={{elevation:8, marginBottom:15,borderRadius:15, backgroundColor:'#065C50', padding:20}}>
        <Text style={{ marginBottom: 10, color:'white', fontFamily: 'monospace'}}>Question: {item.question}</Text>
        <Text style={{ marginBottom: 10, color:'white', fontFamily: 'monospace'}}>Answer: {item.answer}</Text>
          <Text></Text>                       
       <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:25}}>
         
       <Text style={{ color:'white', fontFamily: 'monospace', justifyContent: 'flex-start', marginRight: 220, fontSize: 12}}>{item.date}</Text>
       
      <TouchableHighlight onPress={() => this.props.navigation.navigate('AnswerQuestionTawheed',{...item})}>
       <View style={{marginRight:15}}>
        <Icon size={30} color="white" name="edit" />
          </View>
        </TouchableHighlight>   
        <TouchableHighlight  onPress={() => Alert.alert(
        'Are you sure',
        'You want to delete this?',
        [
          {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
          {text: 'YES', onPress: () => this.props.deletetawheed(item.key)},
        ]
      )} >
     <View>
       <Icon size={30} color="white" name="close" />
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
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
        backgroundColor: '#04917B',
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
