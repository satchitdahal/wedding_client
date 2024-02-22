import React from "react";
import styles from "../Address/address.module.css"
//to test
import c from "../images/c.png"
import a from "../images/a.png"
import b from "../images/b.png"
import d from "../images/d.png"
//to test
const Address = () => {
    return (
        <>
            <div className={styles.flex}>


                <div className={styles.address_container}>
                    <figure className={styles.a}>

                    </figure>
                    <figure className={styles.b}>

                    </figure>
                    <figure className={styles.c}>

                    </figure>
                    <figure className={styles.d}>

                    </figure>
                    <figure className={styles.e}>

                    </figure>



                </div>

            </div>
            <footer className={styles.footer}>
                <h1>ISHANI & SUDUR</h1>
            </footer>
        </>
    )
}

export default Address