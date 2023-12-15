import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Back() {

    const { goBack } = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    goBack();
                }}
            >
                <AntDesign name="arrowleft" size={34} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}