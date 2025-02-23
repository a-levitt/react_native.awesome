import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SafeViewAndroid from './components/SafeViewAndroid';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{
        /*borders*/
        borderWidth: 3,
        borderTopWidth: 5,
        borderBottomWidth: 10,
        borderRightWidth: 20,
        borderColor: '#15099d',
        borderRadius: 10,
        borderBottomLeftRadius: 15,
        /*background color*/
        backgroundColor: '#F0F8FF',
        /*margins*/
        margin: 2,
        marginTop: 5,
        marginLeft: 100,
        marginBottom: 25,
        // marginHorizontal: 100,
      }}>
      <Text>Hello</Text>
      </View>
      <View style={{
        /*margins*/

      }}>
        <Text>Some text here</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
