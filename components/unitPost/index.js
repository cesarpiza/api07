import React from 'react';
import {
    View, Text,
} from 'react-native';
import { styles } from './styles';

export default function UnitPost({ title, body }) {

    if (!title) return;
    const capitalizeTitle = title[0].toUpperCase() + title.slice(1);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{capitalizeTitle}</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    );
}