import { useEffect, useState } from "react";

export function useLocalStorage(key, initialdata) {

    const [data, setData] = useState(initialdata)

    const existingData = JSON.parse(localStorage.getItem(key))

    useEffect(() => {
        if (existingData) {
            setData(existingData)
        } else {
            setData(localStorage.setItem(key, JSON.stringify(initialdata)))
        }
    }, [])

    console.log(existingData)

    const UpdateLocaStorage = (newdata) => {
        localStorage.setItem(key, JSON.stringify(newdata))
        setData(newdata)
    }

    return [data, UpdateLocaStorage]

}