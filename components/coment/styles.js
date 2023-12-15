import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';
const {
    BUTTON_COLOR2,
    SPACING,
    POST_BACKGROUND_COLOR,
} = Styles;

export const styles = StyleSheet.create({
    comment: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: SPACING * 0.3,
        marginBottom: 5,
    },
    container: {
        padding: SPACING,
        borderRadius: SPACING,
        borderWidth: 2,
        marginHorizontal: SPACING,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
    },
    textInput: {
        backgroundColor: POST_BACKGROUND_COLOR,
        padding: SPACING * 0.3,
        fontSize: 18,
    },
    button: {
        backgroundColor: BUTTON_COLOR2,
        alignSelf: 'center',
        width: 90,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SPACING * 0.5,
        marginTop: SPACING,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#fff',
    },
});