import { useState } from "react";

export function useLocalStorage(key, initialdata) {

    const [data, setData] = useState(initialdata)

    const UpdateLocaStorage = (newdata) => {
        localStorage.setItem(key, JSON.stringify(newdata))
        setData(newdata)
    }

    return [data, UpdateLocaStorage]

}