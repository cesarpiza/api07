import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';
const { SPACING } = Styles;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(80, 80, 80, 0.9)',
        paddingVertical: SPACING,
        paddingLeft: SPACING * 2,
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    button: {
        alignSelf: "flex-start",
    },
});