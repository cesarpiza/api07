import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { styles } from './styles';

export default function UserComments({ email, body }) {
    return (
        <View style={styles.container}>
            <Text style={styles.email}>{email}</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    );
}