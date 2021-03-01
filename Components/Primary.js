import * as React from "react";
import {
    View,
    Text
} from "react-native";
import styles from '../Styles/styles.js';


const Primary = ({ id, fl, shortdef, searchTerm }) => {
    return (
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
                        {fl}
                    </Text>
                </View>
            </View>
            <View styles={styles.primaryDescriptionView}>
                <Text style={styles.primaryDescription}>
                    {shortdef}
                </Text>
            </View>
        </View>
    )
}

export default Primary
