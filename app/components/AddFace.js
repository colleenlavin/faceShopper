import React from 'react'
import _ from 'lodash'

export default function AddFace(props) {

    const handleChange = props.handleChange
    const handleSubmit = props.handleSubmit
    const selectedFace = props.selectedFace
    const quantity = props.selectedFace.quantity
    const options = _.range(quantity + 1).toString()


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <legend>Add to cart</legend>
                <div>
                    <select
                        className="form-control"
                        id="quantity"
                        value="1"
                        onChange={handleChange}>
                            {options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            )) }
                      </select>  
                    </div>
            </form>
        </div>
    )
    
}