import Expo, { Constants, LegacyAsyncStorage } from 'expo';
import React from 'react';
import { View, Button, AsyncStorage } from 'react-native';

class AppContainer extends React.Component {

  testData = { a: '1', b: '2' };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <Button title="GetAnswerFromAsyncStorage" onPress={() => {
          AsyncStorage.getItem('ANSWER', (err, result) => {
            alert('get:' + JSON.stringify(result));
            console.log(JSON.stringify(result));
          });
        }} />

        <Button title="GetAnswerFromLegacyAsyncStorage" onPress={() => {
          LegacyAsyncStorage.getItem('ANSWER', (err, result) => {
            alert('get:' + JSON.stringify(result));
            console.log(JSON.stringify(result));
          });
        }} />

        <Button title="LegacyAsyncStorage.migrateItems" onPress={async () => {
          await LegacyAsyncStorage.migrateItems(['ANSWER'])
        }} />

      </View>
    );
  }
}

Expo.registerRootComponent(AppContainer);
