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
  Image,
  Vibration
} from "react-native";
import { decode } from 'html-entities'
import styles from './Styles/styles.js';


const App = () => {
  const [searchTerm, setSearchTerm] = useState()
  const [information, setWordInformation] = useState([])

  const handleSearch = () => {
    if (searchTerm) {
      axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=eb6a48c1-0e5c-439c-bb02-e2a598dae034`)
        .then(({ data }) => {
          if (data) {
            setWordInformation(data);
          }
        })
        .catch(err => console.warn(err))
    }
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
                <View key={id} style={styles.listOfDefinitionsContainer}>
                  {
                    id === 0 ?
                      (
                        <View>
                          <View style={styles.primaryDefinitionContainer}>
                            <View style={styles.primaryDefinition}>
                              <Text style={styles.primaryId}>
                                {`${id}.`}
                              </Text>
                              <Text style={styles.primarySearchTerm}>
                                {searchTerm}
                              </Text>
                              <Text style={styles.primaryType}>
                                {word.fl}
                              </Text>
                            </View>
                          </View>
                          <View styles={styles.primaryDescriptionView}>
                            <Text style={styles.primaryDescription}>
                              {word.shortdef}
                            </Text>
                          </View>
                        </View>
                      )
                      :
                      (
                        <View>
                          <View style={styles.definitionContainer}>
                            <View style={styles.definition}>
                              <Text style={styles.id}>
                                {`${id}.`}
                              </Text>
                              <Text style={styles.searchTerm}>
                                {searchTerm}
                              </Text>
                              <Text style={styles.type}>
                                {word.fl}
                              </Text>
                            </View>
                          </View>
                          <View styles={styles.descriptionView}>
                            <Text style={styles.description}>
                              {word.shortdef}
                            </Text>
                          </View>
                        </View>
                      )
                  }
                </View>
              )
            } else {
              return (
                <View key={id} style={styles.definitionContainer}>
                  <Text style={styles.noDefinition}>
                    Definition Missing
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
      <Text style={styles.logo}>
        Qwiktionary
      </Text>
      <TextInput
        style={styles.input}
        keyboardAppearance='default'
        placeholder={`Enter Search Term...`}
        returnKeyType="done"
        textAlign="center"
        onChangeText={text => {
          setWordInformation([])
          setSearchTerm(text)
        }}
        clearButtonMode="while-editing"
        onSubmitEditing={() => {
          handleSearch();
          Keyboard.dismiss();
        }}
      />
      <View
        style={styles.dividerTop}
      />
      {loadInformation()}
    </SafeAreaView>

  );
}
export default App;