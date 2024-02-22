import React from "react";
import { useState } from "react";
import styles from "../Home/home.module.css"
import { MdOutlineRsvp } from "react-icons/md";
import c from "../images/c.png"
import a from "../images/a.png"
import b from "../images/b.png"
import d from "../images/d.png"



const Home = () => {
    return (
        <>

            {/* <div className={styles.home}>
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
            </div> */}
            <div className={styles.home}>
                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/28DObRCIW_w?autoplay=1&mute=0&controls=0&showinfo=0&loop=1&playlist=28DObRCIW_w&modestbranding=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                ></iframe>
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



            <div className={styles.story}>
                <div className={styles.column3}>
                    <h1>Our Story</h1>
                    <p>We like eachother
                        so we we're like
                        damn ok wanna get married?
                        And we both we're like ok.
                        So ya we have to plan this thing now.

                        Let's make this about this long. I think it looks
                        good being the length that it is. If you dont
                        want text we can add more pics or something

                    </p>
                </div>

                <div className={styles.photos}>


                    <div className={styles.column1}>
                        <img src={c} />
                    </div>

                    <div className={styles.column2}>
                        <img src={a} />
                        <img src={b} />
                    </div>
                    <div className={styles.column4}>
                        <img src={d} />
                    </div>





                </div>



            </div>
            <footer className={styles.footer}>
                <h1>ISHANI & SUDUR</h1>
            </footer>
        </>
    )
}
export default Home 