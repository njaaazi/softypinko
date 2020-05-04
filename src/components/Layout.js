import React, { Component } from 'react'
import '../assets/css/reset.css'
import Header from "./Header"
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                    {this.props.children}
                <Footer />
            </>
        )
    }
}
