import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Main from './pages/Main'
import NewEntry from './pages/NewEntry'
import Report from './pages/Report'

export default Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'order'
    }
  )
)
