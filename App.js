import React from 'react';
import { View} from 'react-native';
import HomePage from './screens/HomePage';




const App = () => {
  
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <HomePage></HomePage>
      </View>
  );
};

export default App;



// import React from 'react';
// import {Text, View} from 'react-native';

// const App = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Hello world !</Text>
//     </View>
//   );
// };

// export default App;
