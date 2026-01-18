import styles from "./zora.module.css";
import { useNavigate } from "react-router-dom";

export default function Zora() {

    const naviagte = useNavigate();

    const redirectToZora = () => {
        naviagte("/")
    }

    return (
        <>
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
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <h1 className={styles.heroText}>Prediction Markets with Zora</h1>
                    <br />
                    <br />
                    <div className={styles.marketCard}>
                        <div className={styles.marketHeader}>
                            <div className={styles.marketTitleInfo}>
                                <h2 className={styles.question}>
                                    Price of Solana by end of 2026?
                                </h2>
                            </div>

                        </div>

                        <div className={styles.options}>
                            <div className={styles.optionRow}>
                                <span className={styles.optionText}>100 or above</span>
                                <span className={styles.percent}>84%</span>
                            </div>

                            <div className={styles.optionRow}>
                                <span className={styles.optionText}>150 or above</span>
                                <span className={styles.percent}>53%</span>
                            </div>

                            <div className={styles.optionRow}>
                                <span className={styles.optionText}>200 or above</span>
                                <span className={styles.percent}>24%</span>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                     <div className={styles.marketCard}>
                        <div className={styles.marketHeader}>
                            <div className={styles.marketTitleInfo}>
                                <h2 className={styles.question}>
                                    How to use Zora?
                                </h2>
                            </div>
                        </div>

                        <div className={styles.options}>
                            <div className={styles.optionRow}>
                                <span className={styles.optionText}>Select a live market event</span>
                            </div>

                            <div className={styles.optionRow}>
                                <span className={styles.optionText}>Ask Zora about the event</span>
                            </div>

                            <div className={styles.optionRow}>
                                <span className={styles.optionText}>Receive insights & monitor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}