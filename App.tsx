import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SafeViewAndroid from './components/SafeViewAndroid';
import Item from './components/Item';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{backgroundColor: '#0039a6', alignItems: 'center'}}>
        <Text>HEADER</Text>
      </View>
      <View>
        <Text>AwesomeApp (body)</Text>
        <View
          style={{
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
        <View  style={{
          /*positioning*/
          position: 'relative', // default
          // top: 10,
          zIndex: 1, // more = closer to viewer
        }}>
          <Item name="APPLE MAC MINI M2 PRO 512GB" price={1703} />
          <Item name="APPLE MAC MINI M4 PRO 128GB" price={799} />
          <Item name="APPLE IPHONE 16 PRO MAX 256GB" price={1500} />
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 600}}>
        <Text style={{color: '#B0C4DE'}}>FOOTER</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
