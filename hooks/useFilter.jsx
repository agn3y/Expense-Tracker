import { useLocalStorage } from './useLocalStorage'

export function useFilter(data, callback) {
    const [query, setQuery] = useLocalStorage("query", '')
    const filtereData = data.filter((data) => callback(data).toLowerCase().includes(query))
    return [filtereData, setQuery]
}
