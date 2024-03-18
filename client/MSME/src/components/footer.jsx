import styles from "../styles/footer.module.css";

export default function Footer() {
    return (
        <>
            <div className={styles.flag_border}></div>
            <div className={styles.footer}>
                <div className={styles.go_top}>
                    <img
                        src="https://www.g20.in/en/images/home/arrow-up.svg"
                        alt=""
                    />
                </div>
                <div className={styles.footer_row}>
                    <div className={styles.footer_img}>
                        <img src="https://www.g20.in/en/images/home/g20-logo.png" alt="" />
                    </div>
                    <div className={styles.footer_col_1}>
                        <h3>About G20</h3>
                        <ul>
                            <li>Overview</li>
                            <li>G20 Members</li>
                            <li>How G20 works</li>
                            <li>Previous Summits</li>
                        </ul>
                    </div>
                    <div className={styles.footer_col_2}>
                        <h3>G20 India 2023</h3>
                        <ul>
                            <li>Logo & Theme</li>
                            <li>G20 Summit, New Delhi</li>
                            <li>G20 India:Recap</li>
                            <li>G20 Secretariat</li>
                        </ul>
                    </div>
                    <div className={styles.footer_col_3}>
                        <h3>Workstreams</h3>
                        <ul>
                            <li>Sherpa Track</li>
                            <li>Finance Track</li>
                            <li>Engagement Groups</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={styles.copyright}>
                    <div className={styles.copy_start}>
                        <ul>
                            <li>Privacy Policy | </li>
                            <li>Terms & Conditions | </li>
                            <li>Copyright Policy | </li>
                            <li>Hyperlinking Policy | </li>
                            <li>Accessibility Status </li>
                        </ul>
                    </div>
                    <div className={styles.copy_end}>
                        ©2023 . All Rights Reserved.
                    </div>
                </div>
                <hr />
                <div className={styles.content}>
                    <div className={styles.content_left}>
                        <div className={styles.content_left_row_1}>
                            © Content owned by eG&IT, Ministry of External
                            Affairs, Government of India.
                        </div>
                        <div className={styles.content_left_row_2}>
                            Site designed and developed by <a href="">Tata Consultancy</a>
                            Services Ltd. and Maintained by eG&IT division,
                            Ministry of External Affairs.
                        </div>
                    </div>
                    <div className={styles.content_right}>
                        Visitors (From 1st December 2022): 15091931 | March 18, 2024 | 19:33 hrs
                    </div>
                </div>
            </div>
        </>
    );
}
