import { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/posts';

export function useGetPosts() {
    const [postsData, setpostsData] = useState([]);
    const [homeProgress, setHomeProgress] = useState(false);

    const abortController = new AbortController();
    const signal = abortController.signal;

    useEffect(() => {
        getPosts();
        // Retornar uma função de limpeza que chama abort() no controller quando o componente é desmontado
        return () => {
            //console.log('desmontou!')
            return abortController.abort()
        };
    }, []);

    async function getPosts() {
        setHomeProgress(true);
        try {
            const response = await fetch(url, { signal });
            const postsData = await response.json();
            const jsonStringfy = JSON.stringify(postsData).replace(/\\/g, ' ')
            const json = JSON.parse(jsonStringfy)
            setpostsData(json);
        } catch (error) {
            console.log('getPosts: ' + error.message);
        } finally {
            setHomeProgress(false);
        }
    }

    return { postsData, homeProgress };
}