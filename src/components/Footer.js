import React, { Component } from 'react'
import styles from '../assets/css/footer.module.css'


export default class Footer extends Component {
    render() {
        return (
            <>
                  <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <ul className={styles.social}>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p className={styles.copyright}>Copyright &copy; 2020 Softy Pinko Company - Design: TemplateMo</p>
                            </div>
                        </div>
                    </div>
                </footer>
    
            </>
        )
    }
}
