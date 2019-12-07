//import liraries
import React, { Component } from 'react';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import { YellowBox } from 'react-native';
import _ from 'lodash';


//To remove the 'setting a time for a long period of time warning
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


// create a component
class App extends Component {
  render() {

  const  state= createStore(reducers,{},applyMiddleware(ReduxThunk))

    return (
            <Provider store={state}>
              <Routes/>
            </Provider>
           
          
    );
  }
}




//make this component available to the app
export default App;
