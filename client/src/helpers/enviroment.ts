export const isClient = () => {
    return typeof window !== 'undefined'
}
export const isServer = () => {
    return typeof window === 'undefined'
}