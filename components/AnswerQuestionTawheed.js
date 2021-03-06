//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button, Alert,ImageBackground } from 'react-native';
import {AnswerQuestionTawheed} from '../actions'
import {connect} from 'react-redux'


// create a component
class Edit extends Component {
  state={
      question:this.props.navigation.state.params.question,
      
      key:this.props.navigation.state.params.key
  }

  submit = () =>{
    
    this.props.AnswerQuestionTawheed(this.state.answer,  this.state.key);

    this.setState({
        answer:"",
       
       key:""
    })

    Alert.alert('Question successfully answered');

  }

    render() {
        
        return (
            <ImageBackground source={require('../image/BACKGROUND.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
    <View style={styles.container}>
        <Text style={{ color:'white'}}>Question: {this.state.question}</Text>
        <TextInput style={{marginTop:20, height:40, backgroundColor: 'rgba(0,0,0,0.35)', color:'white'}} placeholder="Answer here..." onChangeText={answer => this.setState({answer})} value={this.state.answer} />
        <Text></Text>
     <Button title="Answer" onPress={this.submit} color='#264078'/>
    
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
export default connect(null, {AnswerQuestionTawheed})(Edit);
