import { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/posts';

export function useComments(id) {
    const [postData, setpostData] = useState({});
    const [commentsProgress, setCommentsProgress] = useState(false);
    const [sendProgress, setSendProgress] = useState(false);
    const [commentsData, setCommentsData] = useState([]);

    const abortController = new AbortController();
    const signal = abortController.signal;

    useEffect(() => {
        comment(id)
        // Retornar uma função de limpeza que chama abort() no controller quando o componente é desmontado
        return () => {
            //console.log('desmontou!')
            return abortController.abort()
        };
    }, []);

    function getPost(id) {
        try {
            return fetch(`${url}/${id}`, { signal });
        } catch (error) {
            console.log('getPost: ' + error.message);
        }
    }

    function getComments(id) {
        try {
            return fetch(`${url}/${id}/comments`, { signal });
        } catch (error) {
            console.log('getComments: ' + error.message);
        }
    }

    async function comment(id) {
        setCommentsProgress(true);
        try {
            const [post, userComments] = await Promise.all([getPost(id), getComments(id)]);
            const postData = await post.json();
            const userCommentsData = await userComments.json();
            setpostData(postData);
            setCommentsData(userCommentsData);
        } catch (error) {
            console.log('comment: ' + error.message);
        } finally {
            setCommentsProgress(false);
        }
    }

    async function postComment(id, inputValue) {
        if (inputValue.email === '' || inputValue.body === '') {
            alert('Preencha o campo por favor!')
        } else {
            setSendProgress(true);
            try {
                //Simular o delay do botão 'Send' para ver o ActiveIndicator (estava muito rápida a requisição);
                const delay = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 500);
                })
                const comentStringfy = JSON.stringify({ ...inputValue });
                const response = await fetch(`${url}/${id}/comments`, {
                    method: "POST",
                    body: comentStringfy,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    signal,
                })
                const data = await response.json();
                setCommentsData(prev => [...prev, { ...data }])
            } catch (error) {
                console.log('postComment: ' + error.message);
            } finally {
                setSendProgress(false);
            }
        }
    }

    return { commentsProgress, postData, commentsData, postComment, sendProgress };
}