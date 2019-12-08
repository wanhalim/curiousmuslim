//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Button, FlatList, TouchableHighlight, ActivityIndicator} from 'react-native';
import {DisplayQuestionQuranHadith, deleteBlog} from '../actions';
import {connect} from 'react-redux'

import _ from 'lodash';
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'


class DisplayQuranHadith extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
    }
    updateSearch(text){
        this.setState({search: text});
    }
 componentDidMount(){
     this.props.DisplayQuestionQuranHadith()
 }
  render() {
    let filteredQuestion = this.props.listOfBlogs.filter(
        (listOfBlogs) => {
            return listOfBlogs.question.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    )
  return (
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
      this.props.loadingReducer ? <ActivityIndicator size="large" color="#00ff00" /> : <FlatList style={{width:'100%'}} 
        data={filteredQuestion}
       keyExtractor={(item) => item.key}
         showsVerticalScrollIndicator={false}
         renderItem={({item}) => {if (item.answer != null) {
             
         {
           return (
          <View style={{elevation:8, marginBottom:15,borderRadius:15, backgroundColor:'#065C50', padding:20}}>
        <Text style={{ marginBottom: 10,color:'white', fontFamily: 'monospace'}}>Question: {item.question}</Text>
        <Text style={{ marginBottom: 10,color:'white', fontFamily: 'monospace'}}>Answer: {item.answer}</Text>
        <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:25}}>
       <Text style={{ color:'white', fontFamily: 'monospace', fontSize: 12}}>{item.date}</Text>
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
backgroundColor: '#ee6e73',                                    
position: 'absolute',                                          
bottom: 10,                                                    
right: 10, }}>
                
       
        <Icon reverse color='#065C50' name="question-answer" onPress={() => this.props.navigation.navigate('QuestionQuranHadith')}/>
          
          
        </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
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



export default connect(mapStateToProps, {DisplayQuestionQuranHadith,deleteBlog})(DisplayQuranHadith);
