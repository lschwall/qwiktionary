import * as React from "react";
import {
    View,
    Text
} from "react-native";
import styles from '../Styles/styles.js';

const Definitions = ({ id, fl, shortdef, searchTerm }) => {
    return (
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
                        {fl}
                    </Text>
                </View>
            </View>
            <View styles={styles.descriptionView}>
                <Text style={styles.description}>
                    {shortdef}
                </Text>
            </View>
        </View>
    )
}

export default Definitions
