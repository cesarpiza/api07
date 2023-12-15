import { useState } from "react";


export function useTest() {
    const [data, setData] = useState([]);

    function test2() {
        setData([{ name: 'cesar' }])
    }

    function test3() {
        setData([{ name: 'ana' }])
    }

    return { data, test2, test3 };
}