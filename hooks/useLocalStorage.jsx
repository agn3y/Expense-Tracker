import { useEffect, useState } from "react";

export function useLocalStorage(key, localdata) {

    const [data, setData] = useState(localdata)

    useEffect(() => {

        const getdata = JSON.parse(localStorage.getItem(key))

        if (getdata) {
            setData(getdata)
        } else {
            localStorage.setItem(key, JSON.stringify(localdata))
        }

    }, [])

    const localdataupdater = (newData) => {
        if (typeof newData === "function") {
            localStorage.setItem(key, JSON.stringify(newData(data)))
        } else {
            localStorage.setItem(key, JSON.stringify(newData))
        }
        setData(newData)
    }

    return [data, localdataupdater]
}