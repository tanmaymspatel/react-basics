import React from "react";

const Loadercontext = React.createContext({
    loading: false,
    setLoading: () => { }
});

export default Loadercontext;