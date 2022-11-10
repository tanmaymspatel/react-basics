import React from 'react'
import DataProvider from '../../contexts/DataProvider';
import Parent from './Parent'

const DataCommunication = () => {
    return (
        <DataProvider>
            <Parent>
            </Parent>
        </DataProvider>
    )
}

export default DataCommunication;
