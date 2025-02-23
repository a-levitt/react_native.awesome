import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import SafeViewAndroid from './components/SafeViewAndroid';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

export default App;
