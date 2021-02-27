import * as Font from 'expo-font';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontFamily: 'Poppins-Regular',
        fontSize: 36,
        marginBottom: '5%'
    },
    input: {
        flexDirection: 'row',
        borderWidth: 0.1,
        borderColor: 'grey',
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#fafafa',
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        fontSize: 18
    },
    dividerTop: {
        marginTop: 10,
        backgroundColor: '#242C78',
        height: 5,
        opacity: .25,
        width: '80%'
    },
    listOfDefinitionsContainer: {
    },
    primaryDefinitionContainer: {
    },
    primaryDefinition: {
        flexDirection: 'row',
        marginTop: '10%',
    },
    primaryId: {
        flex: 1,
        fontSize: 18,
        fontWeight: "100",
        lineHeight: 30
    },
    primarySearchTerm: {
        flex: 3,
        fontSize: 30,
        lineHeight: 30,
        fontFamily: 'Raleway-Regular'
    },
    primaryType: {
        flex: 4,
        lineHeight: 30,
        fontFamily: 'Raleway-Thin'
    },
    primaryDescriptionView: {

    },
    primaryDescription: {
        flex: 1,
        marginLeft: '10%',
        marginTop: '5%',
        letterSpacing: 1,
        flexWrap: 'wrap',
        fontStyle: 'italic'
    },
    descriptionView: {

    },
    description: {

    },
    definitionContainer: {
    },
    definition: {
        flexDirection: 'row',
        marginTop: '10%',
    },
    id: {
        flex: 1,
        fontWeight: '100'
    },
    searchTerm: {
        flex: 2,

    },
    type: {
        flex: 3,
    },
    description: {
        flex: 1,
        marginLeft: '10%',
        marginTop: '5%',
        letterSpacing: 1,
        flexWrap: 'wrap',
        fontStyle: 'italic',
    },
    noDefinition: {
        marginTop: '10%',
        opacity: .2,
        textDecorationLine: 'line-through',
        color: 'red',
    }
});

export default styles;

