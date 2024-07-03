export default function useEnv(key: string) {
    const ENV = useRuntimeConfig().public
    return useState(() => ENV[key]).value
}