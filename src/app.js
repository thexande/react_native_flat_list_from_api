import { Navigation } from 'react-native-navigation'
import { registerScreens } from './registerScreens'
import { UserList } from './components/UserList'

// registerScreens()

Navigation.registerComponent('userList', () => UserList)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'userList',
    title: 'Welcome'
  }
})
