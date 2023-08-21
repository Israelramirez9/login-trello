import { store } from '@/store'
import React from 'react'
import { Provider } from 'react-redux'

function StoreProvider({ children }: React.PropsWithChildren) {
    return (
        <Provider store={store} children={children} />
    )
}

export default StoreProvider
