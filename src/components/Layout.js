import React, { Component } from 'react'
import Header from "./Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/reset.css'


export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                {this.props.children}
            </>
        )
    }
}
