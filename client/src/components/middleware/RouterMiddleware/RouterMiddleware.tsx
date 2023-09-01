import React from 'react'
import useRouterMiddleware from './useRouterMiddleware'
import { Loading } from '@/components/sections';

function RouterMiddleware({ children }: React.PropsWithChildren) {

    const { isLoading } = useRouterMiddleware();
   
    if (isLoading) return <Loading />

    return children

}

export default RouterMiddleware