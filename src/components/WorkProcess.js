import React, { Component } from 'react'
import workProcessImage from '../assets/images/work-process-item-01.png';
import styles from '../assets/css/workProcess.module.css'



export default class WorkProcess extends Component {
    render() {
        return (
            <>
                <section className={styles.mini} id="work-process">
                    <div className={styles.miniContent}>
                        <div className="container">
                            <div className="row">
                                <div className="offset-lg-3 col-lg-6">
                                    <div className={styles.info}>
                                        <h1>Work Process</h1>
                                        <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-3 col-sm-6 col-6">
                                    <a href="#" className={styles.miniBox}>
                                        <i><img src={workProcessImage} alt="" /></i>
                                        <strong>Get Ideas</strong>
                                        <span>Godard pabst prism fam cliche.</span>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-6 col-6">
                                    <a href="#" className={styles.miniBox}>
                                        <i><img src={workProcessImage} alt="" /></i>
                                        <strong>Sketch Up</strong>
                                        <span>Godard pabst prism fam cliche.</span>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-6 col-6">
                                    <a href="#" className={styles.miniBox}>
                                        <i><img src={workProcessImage} alt="" /></i>
                                        <strong>Discuss</strong>
                                        <span>Godard pabst prism fam cliche.</span>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-6 col-6">
                                    <a href="#" className={styles.miniBox}>
                                        <i><img src={workProcessImage} alt="" /></i>
                                        <strong>Revise</strong>
                                        <span>Godard pabst prism fam cliche.</span>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-6 col-6">
                                    <a href="#" className={styles.miniBox}>
                                        <i><img src={workProcessImage} alt="" /></i>
                                        <strong>Approve</strong>
                                        <span>Godard pabst prism fam cliche.</span>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-6 col-6">
                                    <a href="#" className={styles.miniBox}>
                                        <i><img src={workProcessImage} alt="" /></i>
                                        <strong>Launch</strong>
                                        <span>Godard pabst prism fam cliche.</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
            </>
        )
    }
}
