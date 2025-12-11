import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialData) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem(key));
        if (existingData) {
            setData(existingData);
        } else {
            localStorage.setItem(key, JSON.stringify(initialData))
        }
    }, []);

    function updateLocalStorage(newData) {
        if (typeof newData === 'function') {
            localStorage.setItem(key, JSON.stringify(newData(data)));
            setData(prevState => newData(prevState));
        } else {
            localStorage.setItem(key, JSON.stringify(newData));
            setData(newData);
        }
    }

    return [data, updateLocalStorage];
}