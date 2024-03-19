import styles from "../styles/home.module.css";
import clock from "../assets/clock2.png";
import check from "../assets/checkmark.png";
import team from "../assets/teamWork.png";
import puzzle from "../assets/puzzle.png";
import globe from "../assets/globe.png";

export default function Home() {
    return (
        <>
            <div className={styles.key_features}>
                <div className={styles.key_heading}>
                    <h1>KEY FEATURES</h1>
                    <h2>Participate in nation building activities.</h2>
                </div>
                <div className={styles.tab_icons}>
                    <div className={styles.tab_link}>
                        <img
                            src="https://www.mygov.in/sites/all/themes/mygov/images/svg-icons.svg#do-icon"
                            alt=""
                        />
                        <h1>TO/DO</h1>
                    </div>
                    <div className={styles.tab_link}>
                        <img
                            src="https://www.mygov.in/sites/all/themes/mygov/images/svg-icons.svg#discuss-icon"
                            alt=""
                        />
                        <h1>DISCUSS</h1>
                    </div>
                    <div className={styles.tab_link}>
                        <img
                            src="https://www.mygov.in/sites/all/themes/mygov/images/svg-icons.svg#poll-icon"
                            alt=""
                        />
                        <h1>POLL/SURVEY</h1>
                    </div>
                    <div className={styles.tab_link}>
                        <img
                            src="https://www.mygov.in/sites/all/themes/mygov/images/svg-icons.svg#blog-icon"
                            alt=""
                        />
                        <h1>BLOG</h1>
                    </div>
                    <div className={styles.tab_link}>
                        <img
                            src="https://www.mygov.in/sites/all/themes/mygov/images/svg-icons.svg#talk-icon"
                            alt=""
                        />
                        <h1>TALK</h1>
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
