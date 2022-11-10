import React from 'react'
import Button from '../../Shared/components/UI/Button';

const PropsChild = props => {

    const btnText = `${props.showData ? "Hide" : "Show"} in Parent`

    return (
        <div className='border border-info p-4'>
            <h4>Child</h4>
            <h6 className='my-2'>{props.dataToChild}</h6>
            <div className='text-end my-3 px-3'>
                {/* <button className='btn btn-secondary' onClick={props.onDataToggle}>{props.showData ? "Hide" : "Show"} in Parent</button> */}
                <Button type="button" className="btn btn-secondary" onClick={props.onDataToggle}>{btnText}</Button>
            </div>
        </div>
    )
}

export default PropsChild;
