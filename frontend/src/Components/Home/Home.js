import React from "react";
import { useState } from "react";
import styles from "../Home/home.module.css"
import { MdOutlineRsvp } from "react-icons/md";

const Home = () => {
    return (
        <div className={styles.home}>
            <form className={styles.hold}>
                <div className={styles.ishani_sudur}>
                    <p>ISHANI & SUDUR</p>
                </div>
                <div className={styles.text}>
                    <p>ARE GETTING MARRIED</p>
                </div>
                <div className={styles.date}>
                    <p>07/16/2024</p>
                </div>
                <div className={styles.rsvp}>
                    <button><MdOutlineRsvp size={25} /></button>

                </div>
            </form>

        </div>
    )
}
export default Home 