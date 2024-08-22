import React from 'react';
import { Provider } from 'react-redux';
import store from '@redux/store';
import SearchScreen from '@screens/SearchScreen';
import { SafeAreaView } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <SearchScreen />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
