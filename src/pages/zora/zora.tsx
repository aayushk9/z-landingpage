import { BackgroundEffect } from "../../components/BackgroundEffect/BackgroundEffect";
import styles from "./zora.module.css";
import { useNavigate } from "react-router-dom";

export default function Zora() {

    const naviagte = useNavigate();

    const redirectToZora = () => {
        naviagte("/")
    }

    return (
        <>
        <BackgroundEffect/>
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.navbar}>zora</div>

                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        hi. this IS
                        <br />
                        ZORA
                    </h1>

                    <p className={styles.subtext}>
                        A live prediction market intelligence layer
                        where users select live market events and prompt for analysis,
                        suggestions, and ongoing event monitoring.
                    </p>

                    <div className={styles.actions}>
                        <button onClick={redirectToZora} className={styles.primary}>try zora</button>
                        <button className={styles.secondary}>real time market events</button>
                    </div>
                </div>
            </div>

            <div className={styles.right} >
                
            </div>
        </div>
    
        </>
    );  
}