import * as React from "react";
import { useState } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  ScrollView,
  Image
} from "react-native";
import styles from './Styles/styles.js';


const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [information, setWordInformation] = useState([])

  const handleSearch = () => {
    axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=`)
      .then(({ data }) => {
        if (data) {
          setWordInformation(data);
        }
      })
      .catch(err => console.warn(err))
  }

  const loadInformation = () => {
    if (information) {
      return (
        <ScrollView
          scrollsToTop={false}
          showsVerticalScrollIndicator={false}
        >
          {information.map((word, id) => {
            if (word.def) {
              return (
                <View key={id} style={styles.definitionContainer}>
                  <View style={styles.termContainer}>
                    <Text style={styles.id}>
                      {id}
                    </Text>
                    <Text style={styles.term}>
                      {searchTerm}
                    </Text>
                    <Text style={styles.type}>
                      {word.fl}
                    </Text>
                  </View>
                  <View style={styles.definition}>
                    <Text >
                      {word.shortdef}
                      {"\n"}
                    </Text>
                  </View>
                </View>
              )
            } else {
              return (
                <View key={id} style={styles.definitionContainer}>
                  <Text style={styles.noDefinition}>
                    No definition available
                  </Text>
                </View>
              )
            }
          })}
        </ScrollView>)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Qwiktionary
      </Text>
      <TextInput
        style={styles.input}
        enablesReturnKeyAutomatically
        keyboardAppearance='default'
        placeholder={`Enter Search Term...`}
        returnKeyType="search"
        textAlign="center"
        onChangeText={text => {
          setWordInformation([])
          setSearchTerm(text)
        }}
        clearButtonMode="while-editing"
        onSubmitEditing={() => {
          handleSearch()
          Keyboard.dismiss();
        }}
      />
      <View
        style={styles.line}
      />
      {loadInformation()}
    </SafeAreaView>
  );
}
export default App;