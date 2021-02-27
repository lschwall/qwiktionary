import React from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import styles from '../Styles/styles.js';

const SearchBox = ({ setSearchTerm, setWordInformation, handleSearch }) => {
    return (
        <>
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
        </>
    )
}

export default SearchBox
