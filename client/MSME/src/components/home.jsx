import styles from "../styles/home.module.css";

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
        </>
    );
}
