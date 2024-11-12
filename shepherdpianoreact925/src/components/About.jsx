import React from 'react';

function About() {
    return (
        <div className="container">
            <div className="page-content about-page">
                <h1>About Kamryn Shepherd</h1>
                <section className="profile">
                    <img src="/aboutPhoto.jpg" alt="Kamryn Shepherd at a piano" className="profile-image" />
                    <div className="biography">
                        <h2>Biography</h2>
                        <p>
                            Kamryn Shepherd is currently a Junior at Weber State University actively pursuing a Bachelor of Music degree in Piano Performance under the guidance of the esteemed Dr. Esther Jeehae Ahn.
                            A performer in Ogden's Young Blooming Artist Showcase last Spring, Kamryn aspires to captivate and move audiences with her solo performances,
                            as well as her collaborative ensemble work. In addition to her diligence as a musician, Kamryn also was the First Place Winner of WSU's Fall 2022 Public Speaking Speech Showcase for the Lindquist College of Arts and Humanities.
                            Through her dedication and artistry, Kamryn aims to leave a lasting impact on the world of music.
                        </p>
                    </div>
                </section>
                <div className="resume-link">
                    <a href="/kamryn_shepherd_resume.pdf" target="_blank" rel="noopener noreferrer" className="button">
                        View Resume (PDF)
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;