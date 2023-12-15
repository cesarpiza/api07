import React, { useState } from 'react';
import {
    ActivityIndicator,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';
//import { useFetchApi } from '../../hooks/useFetchApi';

export default function Comment({ id, postComment, sendProgress }) {
     // não da certo pegando o postComment direto aqui porque cada vez que eu chamo a função useFetchApi eu recebo uma referencia diferente de commentsData...(e as outras states também (seu eu quiser...)) Então ao tentar musar o commentsData usando setCommentsData com esse postComment aqui em baixo oculta, na verdade eu não estou mudando o commentsData que está sendo recebido em comments.js; é outro state/outra referência. Já se eu usar o postComment que vem do comments.js por parâmetro, eu estou modificando a referência correta de state; o commentsData correto...
    //const { postComment } = useFetchApi();

    const [inputValue, setInputValue] = useState({
        email: '',
        body: '',
    });

    return (
        <>
            <Text style={styles.comment}>
                make your comment...</Text>
            <View style={styles.container}>
                <Text style={styles.label}>email:</Text>
                <TextInput
                    style={styles.textInput}
                    value={inputValue.email}
                    onChangeText={text => setInputValue(prev => {
                        return { ...prev, email: text }
                    })}
                />
                <Text style={styles.label}>comment:</Text>
                <TextInput
                    style={styles.textInput}
                    value={inputValue.comment}
                    onChangeText={text => setInputValue(prev => {
                        return { ...prev, body: text }
                    })}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        postComment(id, inputValue);
                    }}
                >
                    {sendProgress ?
                        <ActivityIndicator size={22} />
                        :
                        <Text style={styles.buttonText}>send</Text>
                    }
                </TouchableOpacity>
            </View>
        </>
    );
}