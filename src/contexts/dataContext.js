import React from "react";

const DataContext = React.createContext({
    parentCount: 0,
    childCount: 0,
    grandChildCount: 0,
    onParentIncrement: () => { },
    onParentDecrement: () => { },
    onChildIncrement: () => { },
    onChildDecrement: () => { },
    onGrandChildIncrement: () => { },
    onGrandChildDecrement: () => { },
});

export default DataContext;