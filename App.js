import * as React from 'react';
import {View, Text, StyleSheet, TextInput , Image , TouchableOpacity } from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Read from './screens/ReadStory';
import Write from './screens/WriteStory';

export default class App extends React.Component{
  render(){
    return(
    
          <AppContainer/>
  
    )
  }
}

const tabNavigator = createBottomTabNavigator({
  ReadStory : {screen : Read},
  WriteStory : {screen : Write}
},{defaultNavigationOptions:({navigation})=>({
  tabBarIcon : ({})=>{
    const RouteName = navigation.state.routeName;
    if(RouteName==='ReadStory'){
return(
  <Image 
  source = {require('./assets/read.png')} 
  style = {{width : 40,height : 40}}/>
)
    } else {
      return(<Image 
  source = {require('./assets/write.png')} 
  style =  {{width : 40,height : 40}}/>
)
    }
  }
})
})

const AppContainer = createAppContainer(tabNavigator);