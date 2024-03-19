import styles from "../styles/home.module.css";
import clock from "../assets/clock2.png";
import check from "../assets/checkmark.png";
import team from "../assets/teamWork.png";
import puzzle from "../assets/puzzle.png";
import globe from "../assets/globe.png";
import hub from "../assets/management.png"
import collab from "../assets/collab.png"
import review from "../assets/review.png"
import profile from "../assets/profile.png"
import phone from "../assets/phone.png"

export default function Home() {
    return (
        <>
            <div className={styles.key_features}>
                <div className={styles.key_heading}>
                    <h1>KEY FEATURES</h1>
                </div>
                <div className={styles.tab_icons}>
                    <div className={styles.tab_link}>
                        <img
                            src={hub}
                            alt=""
                        />
                        <h1>Centralised Catalogue</h1>
                    </div>
                    <div className={styles.tab_link}>
                        <img
                            src={collab}
                            alt=""
                        />
                        <h1>Colaboration</h1>
                    </div>
                    <div className={styles.tab_link}>
                        <img
                            src={review}
                            alt=""
                        />
                        <h1>Review/ Validation</h1>
                    </div>
                    <div className={styles.tab_link}>
                        <img
                            src={profile}
                            alt=""
                        />
                        <h1>Access Control</h1>
                    </div>
                    <div className={styles.tab_link}>
                        <img
                            src={phone}
                            alt=""
                        />
                        <h1>Mobile Accessibility</h1>
                    </div>
                </div>
            </div>
            <div className={styles.benefits}>
                <div className={styles.b1}>
                    <img src={clock} alt="" />
                    <h3>Time Savings</h3>
                    <p>
                        Efficiently manage your catalog, saving valuable time
                        and resources with streamlined processes and automation
                    </p>
                </div>

                <div className={styles.b1}>
                    <img src={check} alt="" />
                    <h3>Quality Assurance</h3>
                    <p>
                        Ensure product accuracy and consistency through rigorous
                        validation processes
                    </p>
                </div>

                <div className={styles.b1}>
                    <img src={team} alt="" />
                    <h3>Collaboration Boost</h3>
                    <p>
                        Foster real-time collaboration among stakeholders,
                        enhancing productivity and decision-making.
                    </p>
                </div>

                <div className={styles.b1}>
                    <img src={puzzle} alt="" />
                    <h3>Integration Harmony</h3>
                    <p>
                        Seamlessly integrate with e-commerce platforms for a
                        cohesive online presence
                    </p>
                </div>

                <div className={styles.b1}>
                    <img src={globe} alt="" />
                    <h3>Community Connection</h3>
                    <p>
                        Join a vibrant community of industry professionals for
                        networking and knowledge.
                    </p>
                </div>
            </div>
        </>
    );
}
