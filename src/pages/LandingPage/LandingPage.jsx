import React, { useEffect, useState } from 'react'; //import React Component
import styles from './LandingPage.module.css';
import { NavLink } from 'react-router-dom';
import Galaxy from '../../components/Galaxy/Galaxy';
import 'vic-ui-library/dist/ui-library.css'
import { FinalGallery } from 'vic-ui-library'

export function LandingPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [visibleSections, setVisibleSections] = useState({
        intro2: false,
        intro3: false,
        intro4: false,
        intro5: false,
        icon2: false,
        icon3: false,
        icon4: false,
        icon5: false
    });
    const [mockImgs, setMockImgs] = useState([
        "/img/Storyboard1.jpg",
        "/img/Storyboard2.jpeg",
        "/img/Storyboard3.jpg",
    ]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const shouldBeScrolled = scrollTop > 50;

                    if (shouldBeScrolled !== isScrolled) {
                        setIsScrolled(shouldBeScrolled);
                    }

                    const checkVisibility = (elementClass, sectionKey) => {
                        const element = document.querySelector(`.${elementClass}`);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            const windowHeight = window.innerHeight;
                            return rect.top < windowHeight * 0.8;
                        }
                        return false;
                    };

                    const checkIconVisibility = (index) => {
                        const icons = document.querySelectorAll(`.${styles.icon}`);
                        if (icons[index]) {
                            const rect = icons[index].getBoundingClientRect();
                            const windowHeight = window.innerHeight;
                            return rect.top < windowHeight * 0.9;
                        }
                        return false;
                    };

                    const newVisibleSections = {
                        intro1: checkVisibility(styles.intro1, 'intro1'),
                        intro2: checkVisibility(styles.intro2, 'intro2'),
                        intro3: checkVisibility(styles.intro3, 'intro3'),
                        intro4: checkVisibility(styles.intro4, 'intro4'),
                        intro5: checkVisibility(styles.intro5, 'intro5'),
                        icon1: checkIconVisibility(0),
                        icon2: checkIconVisibility(1),
                        icon3: checkIconVisibility(2),
                        icon4: checkIconVisibility(3),
                        icon5: checkIconVisibility(4)
                    };

                    if (JSON.stringify(newVisibleSections) !== JSON.stringify(visibleSections)) {
                        setVisibleSections(newVisibleSections);
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled, visibleSections]);

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        setIsScrolled(false);
    };

    return (
        <div id={styles.landing}>
            <div className={styles.Galaxy_container}>
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={true}
                    density={0.8}
                    glowIntensity={0.15}
                />
            </div>

            <div className={`${styles.logo} ${isScrolled ? styles.logo_scrolled : ''}`} onClick={topFunction}>
                <img src={"/img/logo.png"} alt='logo' />
            </div>

            <div className={`${styles.welcome_board} ${isScrolled ? styles.welcome_board_scrolled : ''}`}>
                <div className={`${styles.welcome_content} ${isScrolled ? styles.welcome_content_scrolled : ''}`}>
                    <div className={styles.word}>
                        <h1>Identify What’s Real</h1>
                        <h2 style={{ fontFamily: "Momo Signature" }}>Detect and Verify Online Content</h2>
                        <p>A shared space for learning and mutual protection.
                            We believe the best way to fight scams is by sharing verified stories,
                            real experiences, and clear guidelines — so no one has to face deception alone.</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <NavLink to="" onClick={topFunction} className={styles.button}>Explore</NavLink>
                        <NavLink to="" onClick={topFunction} className={styles.button}>Follow</NavLink>
                    </div>
                </div>
            </div>

            <main>
                <div>
                    <svg t="1761800988529" className={`${styles.icon} ${visibleSections.icon1 ? styles.visible : ''}`} style={{ opacity: "1" }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1666" width="50" height="50">
                        <path d="M762 512L512 912 262 512l250-400z" p-id="1667"></path>
                    </svg>
                </div>
                <div className={`${styles.intro1} ${visibleSections.intro1 ? styles.visible : ''}`} >
                    <div className={styles.intro1_1}>
                        <div>
                            <h1 >Why does this problem matter?</h1>
                            <p>
                                Online scams are everywhere — from fake scholarship offers to online marketplace traps.
                                Many people, are unsure how to tell what's real and what's not.
                                ScamHub Community exists to make scam awareness accessible, simple, and human.
                            </p>
                        </div>
                    </div>
                    <div className={styles.intro1_1} style={{ gridRow: "2", gridColumn: "2" }}>
                        <div>
                            <h1 >Who are the target users?</h1>
                            <p>
                                <strong>Students</strong> and <strong>Elders</strong> are the primary users of ScamHub Community.
                                But anyone who wants to stay safe online can benefit from our platform.
                            </p>
                        </div>
                    </div>
                    <div className={styles.intro1_1} style={{ gridRow: "3", gridColumn: "1" }}>
                        <div>
                            <h1 >Design Philosophy</h1>
                            <ul style={{ padding: "0", paddingLeft: "15px" }}>
                                <li>Community-first</li>
                                <li>Transparency</li>
                                <li>Simplicity</li>
                                <li>Prevention and Reaction</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <svg t="1761800988529" className={`${styles.icon} ${visibleSections.icon2 ? styles.visible : ''}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1666" width="50" height="50">
                        <path d="M762 512L512 912 262 512l250-400z" p-id="1667"></path>
                    </svg>
                </div>

                <div className={`${styles.intro2} ${visibleSections.intro2 ? styles.visible : ''}`} style={{ textAlign: "center" }}>
                    <h1>Key Features</h1>
                    <div className={styles.intro2_1}>
                        <div>
                            <img style={{ width: "100px", height: "100px" }} src="/img/CommunityStories.jpg" alt='img' />
                            <h2>Community Stories</h2>
                            <p>Learn from real scam incidents shared by people like you.</p>
                        </div>
                        <div>
                            <img style={{ width: "100px", height: "100px" }} src="/img/ReportAndAwareness.jpeg" alt='img' />
                            <h2>Report and Awareness</h2>
                            <p>When you see suspicious behavior, report it to the community — every report helps others stay safe.</p>
                        </div>
                        <div>
                            <img style={{ width: "100px", height: "100px" }} src="/img/Verification.jpg" alt='img' />
                            <h2>Trust & Profile Verification</h2>
                            <p>Build safer interactions by identifying trusted members in the community.</p>
                        </div>
                        <div>
                            <img style={{ width: "100px", height: "100px" }} src="/img/LearningResources.jpg" alt='img' />
                            <h2>Learning & Resources</h2>
                            <p>We make it easy to learn through short guides and interactive examples.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <svg t="1761800988529" className={`${styles.icon} ${visibleSections.icon3 ? styles.visible : ''}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1666" width="50" height="50">
                        <path d="M762 512L512 912 262 512l250-400z" p-id="1667"></path>
                    </svg>
                </div>

                <div className={`${styles.intro4} ${visibleSections.intro4 ? styles.visible : ''}`} style={{ textAlign: "center" }}>
                    <h1>Cases</h1>
                    <div className={styles.intro1_2}>
                        <FinalGallery imgset={mockImgs} openSmall={false} themeColor='black' />
                    </div>
                </div>

                <div>
                    <svg t="1761800988529" className={`${styles.icon} ${visibleSections.icon4 ? styles.visible : ''}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1666" width="50" height="50">
                        <path d="M762 512L512 912 262 512l250-400z" p-id="1667"></path>
                    </svg>
                </div>

                <div className={`${styles.intro5} ${visibleSections.intro5 ? styles.visible : ''}`} style={{ textAlign: "center" }}>
                    <h1>Demo Video</h1>
                    <div>
                        <iframe width="1000" height="600" src="https://www.youtube.com/embed/Ukol4wwkem8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>

                <div>
                    <svg t="1761800988529" className={`${styles.icon} ${visibleSections.icon5 ? styles.visible : ''}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1666" width="50" height="50">
                        <path d="M762 512L512 912 262 512l250-400z" p-id="1667"></path>
                    </svg>
                </div>

                <div className={`${styles.intro3} ${visibleSections.intro3 ? styles.visible : ''}`} style={{ textAlign: "center" }}>
                    <h1>Team Member</h1>
                    <div className={styles.intro3_1}>
                        <div className={styles.intro3_1_1}>
                            <h2>Junjie Wei</h2>
                            <p>Software Engineer</p>
                        </div>
                        <div className={styles.intro3_1_1}>
                            <h2>Jessica Lee</h2>
                            <p>Software Engineer</p>
                        </div>
                        <div className={styles.intro3_1_1}>
                            <h2>Haoliang Cheng</h2>
                            <p>Software Engineer</p>
                        </div>
                        <div className={styles.intro3_1_1}>
                            <h2>Qijian Li</h2>
                            <p>Software Engineer</p>
                        </div>
                        <div className={styles.intro3_1_1}>
                            <h2>Binyu Zhong</h2>
                            <p>Software Engineer</p>
                        </div>
                        <div className={styles.intro3_1_1}>
                            <h2>Runlin Li</h2>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                </div>
            </main>
            <div>
                <footer style={{ marginTop: "150px", paddingTop: "80px", backgroundColor: "black" }}>
                </footer>
            </div>
        </div >
    );
}