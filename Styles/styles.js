import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: '25%',
        height: '10%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        width: 200,
    },
    line: {
        marginTop: 10,
        backgroundColor: '#242C78',
        height: 2,
        width: '80%'
    },
    definitionContainer: {
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    noDefinition: {
        color: 'red',
    },
    id: {
        flex: 1
    },
    term: {
        flex: 1,
        fontWeight: '500'
    },
    type: {
        flex: 3,
        fontWeight: '200'
    },
    termContainer: {
        flexDirection: 'row'
    },
});

export default styles;

