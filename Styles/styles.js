import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontFamily: 'KohinoorBangla-Semibold',
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
        lineHeight: 30
    },
    primarySearchTerm: {
        flex: 2,
        fontSize: 30,
        lineHeight: 30
    },
    primaryType: {
        flex: 3,
        lineHeight: 30
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

    },
    searchTerm: {
        flex: 2,

    },
    type: {
        flex: 3,
    },
    primaryDescriptionView: {

    },
    primaryDescription: {

    },
    noDefinition: {
        marginTop: '10%',
        opacity: .2,
        textDecorationLine: 'line-through',
        color: 'red',
    }
});

export default styles;

