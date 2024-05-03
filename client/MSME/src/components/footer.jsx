import styles from "../styles/footer.module.css";
import { emblem } from "../assets/";


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
                        <div>
                            <img src={emblem} alt="" />
                        </div>
                        <div>
                            <h1>सूक्ष्म , लघु और मध्यम उद्यम मंत्रालय</h1>
                            <h2>Ministry of</h2>
                            <h3>Micro, small & Medium Enterprises</h3>
                        </div>
                    </div>
                    <div className={styles.footer_col_1}>
                        <h3>About MSME</h3>
                        <ul>
                            <li>Overview</li>
                            <li>MSME Members</li>
                            <li>How MSME works</li>
                            <li>Previous Summits</li>
                        </ul>
                    </div>
                    <div className={styles.footer_col_2}>
                        <h3>MSME 2024</h3>
                        <ul>
                            <li>Logo & Theme</li>
                            <li>Collaborations</li>
                            <li>Management</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className={styles.footer_col_3}>
                        <h3>Support</h3>
                        <ul>
                            <li>Forms</li>
                            <li>E-commerce platforms</li>
                            <li>Help Desk</li>
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
                        ©2024 . All Rights Reserved.
                    </div>
                </div>
                <hr />
                <div className={styles.content}>
                    <div className={styles.content_left}>
                        <div className={styles.content_left_row_1}>
                            © Content owned by eG&IT, Ministry of External
                            Affairs, Government of India.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
