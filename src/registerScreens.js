import { Navigation } from 'react-native-navigation'
import UserList from './components/UserList'
import UserDetail  from './components/UserDetail'
import HelloWorld from './components/HelloWorld';
import FlatListDemo from './components/FlatListDemo';

export function registerScreens() {
    Navigation.registerComponent('api_test.userList', () => UserList)
    Navigation.registerComponent('api_test.userDetail', () => UserDetail)
}