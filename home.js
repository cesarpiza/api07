import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import Post from './components/post';
import { Styles } from './styles';
import { useGetPosts } from './hooks/useGetPosts';

const {
    SPACING,
    BACKGROUND_COLOR,
} = Styles;

export default function Home() {

    const { postsData, homeProgress } = useGetPosts();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <FlatList
                contentContainerStyle={{
                    padding: SPACING,
                }}
                showsVerticalScrollIndicator={false}
                data={postsData}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => {
                    return <Post {...item} />;
                }}
            />
            <ActivityIndicator style={{ position: 'absolute' }} size={54} animating={homeProgress} />
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
});