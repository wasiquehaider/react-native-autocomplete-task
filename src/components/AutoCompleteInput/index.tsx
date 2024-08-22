import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextInput, View, StyleSheet } from 'react-native';
import { clearPlaces, fetchPlaces } from '@redux/slices/placesSlice';
import { Dispatch } from '@reduxjs/toolkit';

const AutoCompleteInput: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    if (input.length > 1) {
      dispatch(fetchPlaces(input));
    } else if (input.length >= 0) {
      dispatch(clearPlaces());
    }
  }, [input, dispatch]);

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={(text: string) => setInput(text)}
        placeholder='Search for cities'
        placeholderTextColor='#888'
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    borderWidth: 1,
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default AutoCompleteInput;
