import React, {Component} from 'react'
import AddFace from './AddFace'
import Face from './Face'

export default class FaceContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedQuantity: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({
            selectedQuantity: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        console.log("I've been submitted!")
        // add to cart here
        this.setState({selectedQuantity : 0}) // probably not just setting state -- KHAM
    }

    render() {
        return (
            <div>
           <Face/>
           <AddFace handleChange={handleChange} handleSubmit={handleSubmit}/> {/* this.handleChange, etc -- KHAM*/}
           </div>
        )
}
}

