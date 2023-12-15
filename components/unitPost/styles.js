import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';
const {
    SPACING,
    POST_BACKGROUND_COLOR,
} = Styles;

export const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING,
        backgroundColor: POST_BACKGROUND_COLOR,
        paddingHorizontal: SPACING * 2,
        paddingTop: SPACING * 6,
        paddingBottom: SPACING * 2,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: SPACING * 0.3,
    },
    body: {
        textAlign: 'justify',
        fontWeight: '300',
        fontSize: 18,
    },
});