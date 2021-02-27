import * as React from "react";
import * as Font from 'expo-font'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from './Styles/styles.js';
import SearchBox from "./Components/SearchBox.js";
import Definitions from "./Components/Definitions.js";
import Primary from './Components/Primary.js'


const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const [information, setWordInformation] = useState([]);


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
                        <Primary id={id} fl={word.fl} shortdef={word.shortdef} searchTerm={searchTerm} />
                      )
                      :
                      (
                        <Definitions id={id} fl={word.fl} shortdef={word.shortdef} searchTerm={searchTerm} />
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

  useEffect(() => {
    Font.loadAsync({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.otf')
    }
    ).then(() => setLoaded(true))
  }, [])


  if (!loaded) {
    return (
      <View>
        <Text>
          App loading
        </Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchBox setSearchTerm={setSearchTerm} setWordInformation={setWordInformation} handleSearch={handleSearch} />
      {loadInformation()}
    </SafeAreaView>

  );
}
export default App;