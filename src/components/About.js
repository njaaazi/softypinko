import React, { Component } from 'react'
import styles from '../assets/css/about.module.css'
import left_image from '../assets/images/left-image.png'
import right_image from '../assets/images/right-image.png'

export default class About extends Component {
    render() {
        return (
            <>
                <section className="section padding-top-70 padding-bottom-0" id="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <img src={left_image} className="rounded img-fluid d-block mx-auto" alt="App" />
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                                <div className={styles.leftHeading}>
                                    <h2 className={styles.sectionTitle}>Let’s discuss about you project</h2>
                                </div>
                                <div className="left-text">
                                    <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hr"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section padding-bottom-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                <div className={styles.leftHeading}>
                                    <h2 className={styles.sectionTitle}>We can help you to grow your business</h2>
                                </div>
                                <div className="left-text">
                                    <p>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                <img src={right_image} className="rounded img-fluid d-block mx-auto" alt="App" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
