import React from 'react';
import {View,Text} from 'react-native';
function App(){
  return(
    <View style={{
      flexDirection:"row",
      height:100,
      padding:20
    }}>
      <View style ={{backgroundColor:"red",flex:0.3}}/>
      <View style ={{backgroundColor:"blue",flex:0.3}}/>
      <Text>หมูกรอบทอดกระเทียม อร่อยจริงๆ</Text>
    </View>
   )
}
export default App;                           