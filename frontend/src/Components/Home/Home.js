import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import styles from "../Home/home.module.css"
import { MdOutlineRsvp } from "react-icons/md";
import c from "../images/c.png"
import a from "../images/a.png"
import b from "../images/b.png"
import d from "../images/d.png"
import m from "../images/middle.jpg"
import t from "../images/top.jpg"
import tl from "../images/top_left.jpg"
import tr from "../images/top_right.jpg"
import bo from "../images/bottom.jpg"
import bl from "../images/bottom_left.jpg"
import br from "../images/bottom_right.jpg"
import construction from "../images/construction.jpg"
import { Swiper, SwiperSlide } from "swiper"
import { Link } from "react-router-dom";
import { CiGift } from "react-icons/ci";
import { FaGift } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";





const Home = () => {
    const handleCloseModal = () => {
        setUnderConstruction(false);
    };

    const [underConstruction, setUnderConstruction] = useState(false);

    const handleRSVP = (e) => {
        e.preventDefault();
        window.location.href = 'https://www.zola.com/wedding/ishani-sudur';
    };



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
                {/* <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/28DObRCIW_w?autoplay=1&mute=0&controls=0&showinfo=0&loop=1&playlist=28DObRCIW_w&modestbranding=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                ></iframe> */}
                <iframe
                    className={styles.video}
                    src="https://www.youtube.com/embed/28DObRCIW_w?&mute=0&autoplay=0&controls=0&showinfo=0&loop=1&playlist=28DObRCIW_w&modestbranding=1&rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                // allowFullScreen
                ></iframe>

                {/* <form className={styles.hold}>
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
                </form> */}
            </div>
            <form className={styles.hold}>

                <div className={styles.ishani_sudur}>
                    <p>ISHANI & SUDUR</p>
                </div>
                {/* <div className={styles.date}>
                    <p>JULY 11, 2024 • KENT, WA</p>
                </div>
                <div className={styles.time}>
                    <p>2:00 PM - 11:00 PM </p>
                </div> */}

                <div className={styles.rsvp}>
                    <button onClick={handleRSVP}><FaExternalLinkAlt size={36} /></button>
                </div>



                <div className={styles.pls_div}>
                    <p className={styles.pls_p}>
                        Continue to RSVP and Registry</p>
                </div>

                {/* <Link to='/registry' className={styles.rsvp}>

                    <CiGift size={36} style={{ marginTop: '6px' }} />
                    <p>gift registry</p>
                </Link> */}

                {/* <Link to="/registry" className={styles.rsvp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', padding: '3.5em', marginBottom: '-3.2em', marginTop: '1em' }}>
                    <FaGift size={55} color="rgba(0, 0, 0, 0.7) "
                    //  style={{ marginRight: '8px' }} 

                    />
                    <p style={{ margin: 0, fontSize: '1.05em', color: 'rgba(0,0,0,0.8', fontFamily: 'Libre Baskerville', padding: '.5em' }}>gift registry</p>
                </Link> */}

                <Modal
                    isOpen={underConstruction}
                    onRequestClose={handleCloseModal}
                    className={styles.modalContent}
                    overlayClassName={styles.modalOverlay}
                >
                    <div>

                        {/* <h2>Site under construction </h2> */}
                        {/* <p>The RSVP feature is currently under construction. Please try again later.</p>
                         */}
                        <br>
                        </br>
                        <img src={construction}></img>
                        <br>
                        </br>

                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </Modal>


                {/* <div className={styles.fake_body}>
                    <div className={styles.gallery}>
                        <img src={bo} />
                        <img src={bl} />
                        <img src={br} />
                        <img src={t} />
                        <img src={tl} />
                        <img src={tr} />
                        <img src={m} />
                    </div>
                </div> */}


                {/* <div className={styles.reception}>
                    <p className={styles.day}>WEDDING DAY</p>
                    <p className={styles.dates}>JULY 11, 2024</p>
                    <p className={styles.times}>10:00 AM - 4:00 PM</p>
                    <p className={styles.addy}>12612 SE 261st St,
                        KENT, WA 98030</p>

                </div> */}
                <div className={styles.reception}>
                    <p className={styles.day}>WEDDING RECEPTION</p>
                    <p className={styles.dates}>JULY 12, 2024</p>
                    <p className={styles.times}>5:00 PM - 11:00 PM</p>
                    <p className={styles.addi}>Kent Event Center</p>
                    <p className={styles.addy}>10120 SE 260th St, KENT, WA 98030</p>
                </div>





            </form>

            <div className={styles.story}>

                <h1>Our Story</h1>
                {/* <h2>Title: Love's Summit</h2> */}
                <h3>Ishani & Sudur's Love Story</h3>
                <br></br>
                <div className={styles.column3}>
                    <p>
                        Welcome to Ishani and Sudur's love story! We're Ishani and Sudur! We're thrilled
                        to share the journey that has brought us to this moment of joy.
                        <br></br>
                        <br></br>
                        Our story began in 2010, when our paths first crossed through mutual friends.
                        Little did we know then that our lives would intertwine in the most beautiful ways.
                        During high school, Ishani was teaching a Zumba class for the Nepali community in DFW.
                        It was during one of these classes that Sudur, accompanying his mom to Zumba,
                        first laid eyes on Ishani and was immediately captivated.
                        Though our paths briefly diverged due to our youth, fate had other plans in store.

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
                <div className={styles.column3}>
                    Throughout college, despite the miles that separated us—Ishani in Boulder, Colorado and Sudur in College Station, TX—we reconnected. What began as a friendship blossomed into something deeper, as we discovered that we complemented each other perfectly. Our first date, a magical day spent at the Botanical Gardens in Denver, Colorado, marked the beginning of a beautiful journey together. In these early years we explored the beautiful hikes that Colorado had to offer with our friends.
                    <br>
                    </br>
                    <br></br>
                    Our shared love for adventure led us to learn how to snowboard together—a journey filled with laughter, falls, and endless fun. Though Sudur may have had a head start, Ishani fearlessly tackled each slope, proving that together, we could conquer anything.

                    The pinnacle of our love story came when Sudur proposed to Ishani at Whistler Mountain in Vancouver, BC. Surrounded by Ishani's closest loved ones—her sisters and cousins—the moment was nothing short of magical. Since then, we've embraced the merging of our lives, relishing in the warmth of our families coming together to celebrate us.
                    <br>
                    </br>
                    <br>
                    </br>
                    As we await our wedding day, we're filled with gratitude for the journey that has brought us here. Our love story is a testament to the power of fate, friendship, and unwavering love. Together, hand in hand, we look forward to a lifetime of adventure, laughter, and shared dreams.
                    <br>
                    </br>
                    <br></br>
                    Thank you for being a part of our story.

                    With love,
                    Ishani & Sudur
                </div>

                <div className={styles.slider}>

                </div>





                {/* <div className={styles.photos}> */}


                {/* <div className={styles.column1}>
                        <img src={c} />
                    </div>

                    <div className={styles.column2}>
                        <img src={a} />
                        <img src={b} />
                    </div>
                    <div className={styles.column4}>
                        <img src={d} />
                    </div> */}

                {/* <div className={styles.hexagon}>
                        <div className={styles.hex}></div>
                        <div className={styles.hex}></div>
                    </div>
                    <div className={styles.hexagon}>
                        <div className={styles.hex}></div>
                        <div className={styles.hex}></div>
                    </div>
                    <div className={styles.hexagon}>
                        <div className={styles.hex}></div>
                        <div className={styles.hex}></div>
                    </div> */}

                {/* <img src={a} />
                    <img src={a} />
                    <img src={a} />
                    <img src={a} />
                    <img src={a} />
                    <img src={a} />
                    <img src={a} /> */}



                {/* </div> */}



            </div >
            <footer className={styles.footer}>
                <h1>ISHANI & SUDUR</h1>


                <h2>7.11.2024</h2>

            </footer>
        </>
    )
}
export default Home 