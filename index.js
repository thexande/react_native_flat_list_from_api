import { AppRegistry } from 'react-native';
import App from './App';
import { Navigation } from 'react-native-navigation'

Navigation.registerComponent('realmtest', () => App);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'realmtest',
    title: 'Welcome'
  }
});