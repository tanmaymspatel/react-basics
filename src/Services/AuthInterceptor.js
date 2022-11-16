import axios from "axios";
import React, { useContext } from 'react';
import Loadercontext from "../contexts/loaderContext/loaderContext";

/**
 * axious interceptor
 */
function AuthInterceptor(props) {

    const { setLoading } = useContext(Loadercontext);

    axios.defaults.baseURL = 'local'

    // console.log(props.method);
    axios.interceptors.request.use(request => {
        setLoading(true);
        request.headers.Author = 'Tanmay Patel'
        return request
    },
        (error) => console.log(error))

    axios.interceptors.response.use(response => {
        // debugger
        setLoading(false);
        return response
    },
        (error) => {
            const status = error?.response?.status;
            switch (status) {
                case 400:
                    console.log(error.response);
                    break;
                case 401:
                    console.log("Unauthorized");
                    break;
                case 404:
                    console.log(error.response?.status);
                    break;
                case 500:
                    console.log("server error");
                    break;
                default:
                    console.log("an unknown error occurred");
                    break;
            }
            return error
        })

    return <>
        {props.children}
    </>
}

export default AuthInterceptor

