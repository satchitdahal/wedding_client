import React from "react";
import styles from "../Registry/registry.module.css"
import venmo from "../images/venmo.jpg"


const Registry = () => {
    return (
        <>
            <div className={styles.box}>
                <div className={styles.registry}>

                    <h4>
                        Your presence at our special event means the world to us,
                        and we are truly grateful for your love and support.

                    </h4>
                    <h4>
                        Please know that we do not expect gifts, but if you still feel inclinded to
                        gift us something, please use our venmo link below.
                    </h4>

                    <h4>
                        Thank you, we are excited to see you!
                    </h4>
                </div>

                <div className={styles.img_div}>
                    <img className={styles.ven_img} src={venmo}>
                    </img>

                </div>



            </div>



        </>
    )
}
export default Registry; 
