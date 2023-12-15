import { StyleSheet } from 'react-native';
import { Styles } from '../../styles'
const { SPACING, POST_BACKGROUND_COLOR } = Styles;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: POST_BACKGROUND_COLOR,
        padding: SPACING,
        marginBottom: SPACING,
    },
    email: {
        marginBottom: SPACING * 0.5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    body: {},
});