import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        borderRadius: 8,
        elevation: 4,
        marginTop: '10%',
        marginBottom: 24,
        paddingBottom: '20%',
        paddingLeft: 16,
        paddingRight: 16,
        zIndex: 10,
        height: 520,
        width: '90%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    perfil: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        borderRadius: 70
    },
    label: {
        fontSize: 14,
        textAlign: 'left',
        fontWeight: '500',
        marginBottom: 4,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    text: {
        fontSize: 14,
        textAlign: 'left',
        fontWeight: '500',
        marginBottom: 18,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    btnReturn: {
        width: 240, 
        padding: 16,
        borderRadius: 12,
    },
    btnText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18
    }
});

export default styles;