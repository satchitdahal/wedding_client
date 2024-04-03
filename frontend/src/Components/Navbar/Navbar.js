import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../Navbar/navbar.module.css'
import { AiOutlineUser } from 'react-icons'
import { TiContacts } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";
import { CiGift } from "react-icons/ci";
import { MdQuestionAnswer } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import logo from '../images/logo.png'
const Navbar = () => {
    const [nav, setNav] = useState(false);

    // adding
    const handleLinkClick = () => {
        setNav(false); // Close the dropdown menu when a link is clicked
    };
    // 

    return (
        <header className={styles.navbar}>
            <Link to='/'>
                <img src={logo} alt="/" />
            </Link>
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') :
                    [styles.menu]}>

                    <li>
                        {/* <Link to='/registry'>
                            <CiGift size={25} style={{ marginTop: '6px' }} />
                        </Link> */}
                        <Link to='/registry' onClick={handleLinkClick}>
                            <CiGift size={25} style={{ marginTop: '6px' }} />
                        </Link>

                    </li>
                    <li>
                        {/* <Link to='/registry'>
                            <CiGift size={25} style={{ marginTop: '6px' }} />
                        </Link> */}
                        <Link to='/faq' onClick={handleLinkClick}>
                            <FaQuestion size={25} style={{ marginTop: '6px' }} />
                        </Link>

                    </li>

                </ul>
            </nav>

            <div className={styles.mobile_btn} onClick={() => setNav(!nav)}>
                {nav ? <FaWindowClose size={25} /> : <IoMenu size={25} />}


            </div>

        </header>

    )
}
export default Navbar