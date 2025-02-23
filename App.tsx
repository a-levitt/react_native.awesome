import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SafeViewAndroid from './components/SafeViewAndroid';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{
        borderWidth: 3,
        borderTopWidth: 5,
        borderBottomWidth: 10,
        borderRightWidth: 20,
        borderColor: '#15099d',
        borderRadius: 10,
        borderBottomLeftRadius: 15,
      }}>
      <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
