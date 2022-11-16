import React, { useState } from 'react'
import Loadercontext from './loaderContext'

function LoaderProvider(props) {

    const [loading, setLoading] = useState(false)


    const loaderContext = {
        loading: loading,
        setLoading: setLoading,
    }
    return (
        <Loadercontext.Provider value={loaderContext}>
            {props.children}
        </Loadercontext.Provider>
    )
}

export default LoaderProvider
