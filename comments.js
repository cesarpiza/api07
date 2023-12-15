import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import UnitPost from './components/unitPost';
import Back from './components/back';
import Comment from './components/coment';
import UserComments from './components/userComments';
import { Styles } from './styles';
import { useComments } from './hooks/useComments'
import { ActivityIndicator } from 'react-native';
const { SPACING } = Styles;

export default function Comments({ route }) {

    const {
        id,
    } = route.params;

    const { postData, commentsData, commentsProgress, postComment, sendProgress } = useComments(id);

    return (
        <SafeAreaView style={styles.container}>
            {commentsProgress ?
                <ActivityIndicator size={54} />
                :
                <ScrollView
                    style={{
                        width: '100%',
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <UnitPost {...postData} />
                    <Comment id={id} postComment={postComment} sendProgress={sendProgress} />
                    <View style={styles.userCommentsContainer}>
                        {commentsData.map((comment, index) => {
                            return <UserComments key={String(index)} {...comment} />
                        })}
                    </View>
                </ScrollView>}
            <Back />
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userCommentsContainer: {
        marginTop: SPACING,
        paddingHorizontal: SPACING,
    }
});