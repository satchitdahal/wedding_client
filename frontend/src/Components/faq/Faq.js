import React from "react";
import styles from "../faq/faq.module.css"
import bot from "../images/bot.jpg"
import hotel from "../images/hotel.jpg"
const Faq = () => {
    return (
        <>
            <div className={styles.faq_main}>
                <div className={styles.faq_questions}>
                    <h1 className={styles.faq_header}>Frequently Asked Questions</h1>

                    <h2>
                        1. Is the wedding/reception indoors
                        or outdoors?
                    </h2>
                    <h3>
                        - Our wedding will be held on a lawn
                        outdoors, our reception is an indoor event.
                    </h3>
                    <br></br>
                    <h2>
                        2. What date should I RSVP by?
                    </h2>
                    <h3>
                        - Please RSVP by April 15th.
                    </h3>
                    <br></br>
                    <h1 className={styles.h1}> Helpful Links</h1>
                </div>
                <div className={styles.faq_links}>
                    <div className={styles.hotel}>
                        <a href="https://www.sonesta.com/sonesta-select/wa/renton/sonesta-select-seattle-renton-suites?isGroupCode=true&groupCode=siwed2024&checkin=2024-07-06&checkout=2024-07-15">
                            <img src={hotel}></img>
                        </a>
                        <h3>Hotel booking</h3>
                    </div>
                    <div className={styles.bot}>
                        <a href="https://mayasdesiboutique.com/">
                            <img src={bot}></img>
                        </a>
                        <h3>Boutique</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq;