import { useState } from 'react'

export function useFilter(data, callback) {
    const [query, setQuery] = useState('')
    const filtereData = data.filter((data) => callback(data).toLowerCase().includes(query))
    return [filtereData, setQuery]
}
