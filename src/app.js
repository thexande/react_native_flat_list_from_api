import { Navigation } from 'react-native-navigation'
import { registerScreens } from './registerScreens'
import { UserDetail } from './components/UserDetail'

registerScreens()


Navigation.startSingleScreenApp({
  screen: {
    screen: "api_test.userList",
    title: 'Welcome'
  }
})
