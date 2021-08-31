import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img classNAme="my-3" src={loading} alt="loading" />
            </div>
        )
    }
}

export default Spinner
