import { Navigation } from 'react-native-navigation'
import { UserList } from './components/UserList'
import { UserDetail } from './components/UserDetail'

export function registerScreens() {
    Navigation.registerComponent('userList', () => UserList)
    Navigation.registerComponent('userDetail', () => UserDetail)
}