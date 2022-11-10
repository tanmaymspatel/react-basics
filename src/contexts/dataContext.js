import React from "react";

const DataContext = React.createContext({
    grandChildCount: 0,
    onParentIncrement: () => { },
    onParentDecrement: () => { },
    onChildIncrement: () => { },
    onChildDecrement: () => { },
    onGrandChildIncrement: () => { },
    onGrandChildDecrement: () => { },
});

export default DataContext;