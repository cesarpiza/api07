import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Post({ title, body, id }) {

    const { navigate } = useNavigation();

    const capitalizeTitle = title[0].toUpperCase() + title.slice(1);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{capitalizeTitle}</Text>
            <Text style={styles.body}>{body}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigate('Comments', { id });
                }}
            >
                <Text style={styles.buttonText}>read</Text>
            </TouchableOpacity>
        </View>
    );
}