import Blogs from './Blogs';
import Post from './Post';

import HomeScreen from './HomeScreen'
import CategoriesScreen from './CategoriesScreen'
import CategoriesScreenUstaz from './CategoriesScreenUstaz'
import QuestionTawheed from './QuestionTawheed'
import QuestionFiqh from './QuestionFiqh'
import QuestionQuranHadith from './QuestionQuranHadith'
import DisplayFiqh from './DisplayFiqh'
import DisplayQuranHadith from './DisplayQuranHadith'
import DisplayTawheed from './DisplayTawheed'
import AnswerQuestionFiqh from './AnswerQuestionFiqh';
import AnswerQuestionQuranHadith from './AnswerQuestionQuranHadith';
import AnswerQuestionTawheed from './AnswerQuestionTawheed';
import DoneFiqh from './DoneFiqh'
import DoneQuranHadith from './DoneQuranHadith'
import DoneTawheed from './DoneTawheed'
import EditFiqh from './EditFiqh'
import EditQuranHadith from './EditQuranHadith'
import EditTawheed from './EditTawheed'
import SplashScreen from './SplashScreen'



import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


const NavStack =createStackNavigator({
  SplashScreen:{
    screen:SplashScreen,
    navigationOptions:() => ({
      header: null
    
})
    },  
  Home:{
        screen:HomeScreen,
        navigationOptions:() => ({
            headerTitle:"SIGN IN",
            headerLeft: null,
            header: null,
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
    })
        },
        Blogs:{
        screen:Blogs,
        navigationOptions:() => ({
            headerTitle:"Blogs",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
            
        })
    },
    CategoriesScreen:{
        screen:CategoriesScreen,
        navigationOptions:() => ({
            headerTitle:"ANONYMOUS",
            
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
            
        })
    },
    CategoriesScreenUstaz:{
        screen:CategoriesScreenUstaz,
        navigationOptions:() => ({
            headerTitle:"HOME",
            headerLeft: null,
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    QuestionTawheed:{
        screen:QuestionTawheed,
        navigationOptions:() => ({
            headerTitle:"TAWHEED",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    QuestionFiqh:{
        screen:QuestionFiqh,
        navigationOptions:() => ({
            headerTitle:"FIQH",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    QuestionQuranHadith:{
        screen:QuestionQuranHadith,
        navigationOptions:() => ({
            headerTitle:"QURAN & HADITH",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    DisplayFiqh:{
        screen:DisplayFiqh,
        navigationOptions:() => ({
            headerTitle:"FIQH",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    DisplayQuranHadith:{
        screen:DisplayQuranHadith,
        navigationOptions:() => ({
            headerTitle:"QURAN & HADITH",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    DisplayTawheed:{
        screen:DisplayTawheed,
        navigationOptions:() => ({
            headerTitle:"TAWHEED",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    AnswerQuestionFiqh:{
        screen:AnswerQuestionFiqh,
        navigationOptions:() => ({
            headerTitle:"FIQH",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    AnswerQuestionQuranHadith:{
        screen:AnswerQuestionQuranHadith,
        navigationOptions:() => ({
            headerTitle:"QURAN & HADITH",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    AnswerQuestionTawheed:{
        screen:AnswerQuestionTawheed,
        navigationOptions:() => ({
            headerTitle:"TAWHEED",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    DoneFiqh:{
        screen:DoneFiqh,
        navigationOptions:() => ({
            headerTitle:"FIQH",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    DoneQuranHadith:{
        screen:DoneQuranHadith,
        navigationOptions:() => ({
            headerTitle:"QURAN & HADITH",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    DoneTawheed:{
        screen:DoneTawheed,
        navigationOptions:() => ({
            headerTitle:"TAWHEED",
            headerStyle: {
                backgroundColor: '#264078',
                
              },
              headerTitleStyle: {
                
                
                
              },
              headerTintColor: 'white'
        })
    },
    EditFiqh:{
      screen:EditFiqh,
      navigationOptions:() => ({
          headerTitle:"FIQH",
          headerStyle: {
              backgroundColor: '#264078',
              
            },
            headerTitleStyle: {
              
              
              
            },
            headerTintColor: 'white'
      })
  },
  EditQuranHadith:{
    screen:EditQuranHadith,
    navigationOptions:() => ({
        headerTitle:"QURAN & HADITH",
        headerStyle: {
            backgroundColor: '#264078',
            
          },
          headerTitleStyle: {
            
            
            
          },
          headerTintColor: 'white'
    })
},
EditTawheed:{
  screen:EditTawheed,
  navigationOptions:() => ({
      headerTitle:"TAWHEED",
      headerStyle: {
          backgroundColor: '#264078',
          
        },
        headerTitleStyle: {
          
          
          
        },
        headerTintColor: 'white'
  })
},
    },
    
    {
         headerLayoutPreset:"center"
  })



export default Routes =createAppContainer(NavStack)