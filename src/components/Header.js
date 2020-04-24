import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from '../assets/css/header.module.css'
import logo from '../assets/images/logo.png';

export default class Header extends Component {
    render() {
        return (
            <>
                 <header className={[styles.headerArea, styles.headerSticky].join(' ')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className={styles.mainNav}>
                                    <a href="#" className={styles.logo}>
                                        <img src={logo} alt="Softy Pinko"/>
                                    </a>
                                    <ul className={styles.nav}>
                                        <li><Link to="#welcome">Home</Link></li>
                                        <li><Link to="#features">About</Link></li>
                                        <li><Link to="#work-process">Work Process</Link></li>
                                        <li><Link to="#testimonials">Testimonials</Link></li>
                                        <li><Link to="#pricing-plans">Pricing Tables</Link></li>
                                        <li><Link to="#blog">Blog Entries</Link></li>
                                        <li><Link to="#contact-us">Contact Us</Link></li>
                                    </ul>
                                    <a className={styles.menuTrigger}>
                                        <span>Menu</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

            </>
        )
    }
}
