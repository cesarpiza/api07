import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';
const {
    SPACING,
    BUTTON_COLOR,
    POST_BACKGROUND_COLOR,
} = Styles;

export const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING * 2,
        backgroundColor: POST_BACKGROUND_COLOR,
        padding: SPACING,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: SPACING * 0.3,
    },
    body: {
        marginBottom: SPACING * 2,
        textAlign: 'justify',
        fontWeight: '300',
        fontSize: 18,
    },
    button: {
        paddingVertical: SPACING * 0.7,
        paddingHorizontal: SPACING,
        borderRadius: SPACING * 0.5,
        alignSelf: 'flex-start',
        backgroundColor: BUTTON_COLOR,
    },
    buttonText: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
});