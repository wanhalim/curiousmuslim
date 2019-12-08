import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import firebase from 'firebase';
import fire from '../fb'
import { Icon } from 'react-native-elements'




export default class CategoriesScreenUstaz extends Component {

  constructor(props)
  {
    super(props);
    
    this.state = {fiqh: false, hadith:false, tawheed:false, all:false, loading: false};
    
  }


    // componentDidMount () {
    //   this.setState({loading:true});
    //   fire.database().ref('/user/' + firebase.auth().currentUser.uid).on('value', data=>{
    //     if(data.val().category == 'fiqh'){
    //       this.setState({fiqh: true, loading: false})
    //     }
    //     if(data.val().category == 'tawheed'){
    //       this.setState({tawheed: true, loading: false})
    //     }
    //     if(data.val().category == 'hadith'){
    //       this.setState({hadith: true, loading: false})
    //     }
    //     if(data.val().category == 'all'){
    //       this.setState({all: true, loading: false})
    //     }
    //   })

      
    // }


    try = () =>
    {
      this.setState({loading:true});
      fire.database().ref('/user/' + firebase.auth().currentUser.uid).on('value', data=>{
        if(data.val().category == 'fiqh'){
          this.setState({loading:false});
          this.props.navigation.navigate('DisplayFiqh')
        }
        if(data.val().category == 'tawheed'){
          this.setState({loading:false});
          this.props.navigation.navigate('DisplayTawheed')
        }
        if(data.val().category == 'hadith'){
          this.setState({loading:false});
          this.props.navigation.navigate('DisplayQuranHadith')
        }
        if(data.val().category == 'all'){
          this.setState({loading:false});
          console.log('test')
        }
        
      })

    }


    renderTry (){
      if(this.state.loading){
       return <View>
         <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
               <Text style={{ color:'white',  textAlign:'center',  fontSize:19}}>WELCOME,</Text>
               <Text style={{ color:'white',  textAlign:'center',  fontSize:19}}>YOU ARE SIGNED IN!</Text>
               <Text></Text>
               <Text></Text><Text></Text><Text></Text>
       <ActivityIndicator size="large" color="#00C2D5" />
       </View>
          }
           return <View>
      <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
               <Text style={{ color:'white',  textAlign:'center',  fontSize:19}}>WELCOME,</Text>
               <Text style={{ color:'white',  textAlign:'center',  fontSize:19}}>YOU ARE SIGNED IN!</Text>
               <Text></Text>
               <Text></Text><Text></Text><Text></Text>
             <Button title='CONTINUE TO QUESTIONS' onPress={() => this.try()}  color='#264078'/>
             
          </View>
    }
//     renderButton () {
//       if(this.state.loading){
//       return <ActivityIndicator size="large" color="#00ff00" />
//       }
//       if(this.state.fiqh){
//         return <View>
//           <Text style={{ color:'white',  textAlign:'center'}}>PRESS TO CONTINUE TO FIQH PAGE</Text>
//          <Text></Text><Text></Text><Text></Text>
//           <Button
//         color='#065C50'
//   title="Fiqh"
//   onPress={() => this.props.navigation.navigate('DisplayFiqh')}
//   />
//   <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
//           <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
//           <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
          
//             <Button
//             color='#065C50'
//         title="Sign out"
//         onPress={() => Alert.alert(
//         'Are you sure',
//         'You want to sign out?',
//         [
//           {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
//           {text: 'YES', onPress: () => this.signOutUser()},
//         ]
//       )} 
//         />    
//         </View>
//       }if (this.state.hadith) {
//        return <View>
//          <Text style={{ color:'white',  textAlign:'center'}}>PRESS TO CONTINUE TO QURAN AND HADITH PAGE</Text>
//          <Text></Text><Text></Text><Text></Text>
//        <Button
//                 color='#065C50'
//           title="Qur'an & hadith"
//           onPress={() => this.props.navigation.navigate('DisplayQuranHadith')}
//           /><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
//           <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
//           <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
          
//             <Button
//             color='#065C50'
//         title="Sign out"
//         onPress={() => Alert.alert(
//         'Are you sure',
//         'You want to sign out?',
//         [
//           {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
//           {text: 'YES', onPress: () => this.signOutUser()},
//         ]
//       )} 
//         />    
//           </View>
//       }if (this.state.tawheed){
//        return <View >
//          <Text style={{ color:'white',  textAlign:'center'}}>PRESS TO CONTINUE TO TAWHEED PAGE</Text>
//          <Text></Text><Text></Text><Text></Text>
//        <Button
//         color='#065C50'
//   title="Tawheed"
//   onPress={() => this.props.navigation.navigate('DisplayTawheed')}
//   /><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
//   <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
//   <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
  
//     <Button
//     color='#065C50'
// title="Sign out"
// onPress={() => Alert.alert(
// 'Are you sure',
// 'You want to sign out?',
// [
//   {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
//   {text: 'YES', onPress: () => this.signOutUser()},
// ]
// )} 
// />    
//   </View>
//       }if (this.state.all){
//        return <View>
//          <Text style={{ color:'white',  textAlign:'center'}}>WHICH CATEGORY OF QUESTIONS YOU WISH TO ANSWER</Text>
//          <Text></Text><Text></Text><Text></Text>
//          <Button
//                 color='#065C50'
//           title="Qur'an & hadith"
//           onPress={() => this.props.navigation.navigate('DisplayQuranHadith')}
//           />
//           <Text></Text>
//           <Button
//                 color='#065C50'
//           title="Fiqh"
//           onPress={() => this.props.navigation.navigate('DisplayFiqh')}
//           />
//           <Text></Text>
//        <Button
//                 color='#065C50'
//           title="Tawheed"
//           onPress={() => this.props.navigation.navigate('DisplayTawheed')}
//           />
//           <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
//           <Text></Text><Text></Text>
//           <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
          
//             <Button
//             color='#065C50'
//         title="Sign out"
//         onPress={() => Alert.alert(
//         'Are you sure',
//         'You want to sign out?',
//         [
//           {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
//           {text: 'YES', onPress: () => this.signOutUser()},
//         ]
//       )} 
//         />    

//           </View>
//       }
//     }

    signOutUser = () => {
            
            firebase.auth().signOut();
            this.props.navigation.navigate('Home');
        
    }
     
    render() {
        return(
          <ImageBackground source={require('../image/BACKGROUND.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
<ScrollView >
            
            <View style={styles.semua}>
               {/* <Text></Text>
               {this.renderButton()} */}
               {this.renderTry()}
            </View>
            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
          <Text></Text><Text></Text><Text></Text>
          
          <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
        
          <Icon name="exit-to-app"  reverse color='#264078'
          onPress={() => Alert.alert('Are you sure','You want to sign out?',
          [
            {text: 'NO', style: 'cancel'},
            {text: 'YES', onPress: () => this.signOutUser()},
          ]
                    )} 
          />  
          
          </View>
          
            </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    semua: {
      padding: 50,
        flex: 1
       
        
      },



});