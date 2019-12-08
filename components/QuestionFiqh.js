//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button, Alert, ImageBackground } from 'react-native';
import {askquestionfiqh} from '../actions'
import {connect} from 'react-redux'


// create a component
class QuestionFiqh extends Component {
  state={
      question:"",
      date: ''

  }

  submit = () =>{
    this.setState({
        question:'',
        date: new Date().getDate() + "/" + (new Date().getMonth()) + "/" + new Date().getFullYear(),
        
    })
      this.props.askquestionfiqh(this.state.question, this.state.date)
     
      this.props.navigation.navigate('NavStack')
      Alert.alert('Question successfully asked');
      
  }

    render() {
        return (
        <ImageBackground source={require('../image/BACKGROUND.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
    <View style={styles.container}>
        <Text style={{ color:'white'}}>Ask a question</Text>
        <TextInput style={{
            marginTop:20, 
            height:40, 
            backgroundColor: 'rgba(0,0,0,0.35)', color:'white' 
            }} 
            placeholder="Type here..." 
            onChangeText={question => this.setState({question})} value={this.state.question} />
        <Text></Text>
     <Button title="Submit question" onPress={this.submit} color='#264078'/>
     <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
    
    
    </View>
    </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
         padding:30,
       
    },
});

//make this component available to the app
export default connect(null, {askquestionfiqh})(QuestionFiqh);
