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
        /*paddings*/
        padding: 7,
        paddingBottom: 5,
        // paddingHorizontal: 100,
      }}>
      <Text>Hello</Text>
      </View>
      <View style={{
        /*positioning*/
        position: 'relative', // default
        // top: 10,
        zIndex: 1, // more = closer to viewer
      }}>
        <Text>Some text here</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
