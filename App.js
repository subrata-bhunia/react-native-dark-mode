import { 
  NavigationContainer,
  DarkTheme as NavDark, 
  DefaultTheme as NavDefault
} from '@react-navigation/native';
import React, { useState } from 'react';
// import Navigate from './src/navigation/Navigate';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDark,
  DefaultTheme as PaperDefault,
  Card
} from 'react-native-paper'
// import{ AuthContext} from './src/constants/context';
import { View,Text,TouchableOpacity } from 'react-native';



const App=()=>{
  const [isDark,setIsDark]=useState(true);
  const CustomDefaultTheme={
      ...NavDefault,
      ...PaperDefault,
      colors:{
          ...NavDefault.colors,
          ...PaperDefault.colors,
          homeTextbtn:'#0b1e6b'
      },
      icons:{
        iconName:'day-sunny',
        iconType:'fontisto',
        iconColor:'#FDB813'
      }

  }
  const CustomDarkTheme={
      ...NavDark,
      ...PaperDark,
      colors:{
          ...NavDark.colors,
          ...PaperDark.colors,
          homeTextbtn:'#fff'
      },
      icons:{
        iconName:'moon-o',
        iconType:'font-awesome',
        iconColor:'#F4F1C9'
      }
  }
 
 const theme= isDark ? CustomDarkTheme : CustomDefaultTheme;
const Colors =theme.colors

//  const authContext = React.useMemo(() => ({
//   toggleTheme: () => {
//       setIsDark( isDark => !isDark );
//     }

// }), []);
  return(
      <PaperProvider theme={theme}>
          {/* <AuthContext.Provider value={authContext}> */}
              <NavigationContainer theme={theme}>
                  <View style={{flex:1,backgroundColor:Colors.background}}>
                    <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>{setIsDark( isDark => !isDark );}}>
                    <Text style={{color:Colors.text,textAlign:'center'}}>
                      OK Jannu
                      {console.log(theme)}
                    </Text>
                    </TouchableOpacity>
                    <Card theme={theme} >
                      <Text>
                        Boom
                      </Text>
                      <Text>
                        Boom
                      </Text>
                      <Text>
                        Boom
                      </Text>
                      <Text>
                        Boom
                      </Text>
                      <Text>
                        Boom
                      </Text>
                    </Card>
                  </View>
              </NavigationContainer>
          {/* </AuthContext.Provider> */}
     </PaperProvider>
  )
}



export default App;