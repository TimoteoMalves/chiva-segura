import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        flex: 1,
        borderRadius: 8,
        elevation: 4,
        margin: 12,
        padding: 16,
        zIndex: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },
    perfil: {
        width: 112,
        height: 110,
        alignSelf: 'center',
        marginBottom: 12
    },
    titulo: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 12,
        fontWeight: '600'
    },
    areaBotao: {
        alignContent: 'flex-end',
        alignSelf: 'center'
    },
    botao: {
        alignContent: 'flex-end',
        alignSelf: 'center',
        width: 100,
        opacity: 1,
        padding: 8,
        borderRadius: 8,
        width: 116
    },
    botaoTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '500',
    },
    favoriteBtn: {
        marginTop: 12
    }
});

export default styles;