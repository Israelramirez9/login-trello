import React from 'react'
import useRouterMiddleware from './useRouterMiddleware'
import { BarSpinner } from '@/components/commons';

function RouterMiddleware({ children }: React.PropsWithChildren) {

    const { isLoading } = useRouterMiddleware();

    if (isLoading) return <BarSpinner />

    return children

}

export default RouterMiddleware