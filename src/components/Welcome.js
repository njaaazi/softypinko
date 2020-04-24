import React, { Component } from 'react'
import styles from '../assets/css/welcome.module.css'

export default class Welcome extends Component {
    render() {
        return (
            <>
                <div className={styles.welcomeArea} id="welcome">
                    <div className={styles.headerText}>
                        <div className="container">
                            <div className="row">
                                <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                                    <h1>We provide the best <strong>strategy</strong> <br/> to grow up your <strong>business</strong></h1>
                                    <p>Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo 
                                    for your company at absolutely free of charge</p>
                                    <a href="#features" className="main-button-slider">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
