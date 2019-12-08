//import liraries
import React, { Component } from 'react';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import { YellowBox } from 'react-native';
import _ from 'lodash';
import OneSignal from 'react-native-onesignal';


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
  constructor(properties) {
    super(properties);
    OneSignal.init("3ec3ef1a-f101-49d6-bd42-5da8cde903cb");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
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
