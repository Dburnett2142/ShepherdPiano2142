// About.jsx
import React from 'react';

function About() {
    return (
        <div className="about-page">
            <main>
                <h1>About Kamryn Shepherd</h1>

                <section className="profile">
                    {/* Replace with actual image path */}
                    <img src="/pianoicon.png" alt="Kamryn Shepherd performing" />
                    <div className="biography">
                        <h2>Biography</h2>
                        <p>
                            Kamryn Shepherd is a passionate and dedicated piano instructor with [X] years of experience.
                            Born and raised in [City/State], Kamryn discovered a love for music at an early age...
                            [Continue with more biographical details]
                        </p>
                    </div>
                </section>

                <section className="philosophy">
                    <h2>Teaching Philosophy</h2>
                    <p>
                        My approach to teaching piano is centered on fostering a love for music while building
                        a strong technical foundation. I believe that every student has unique potential and
                        learning styles, and I tailor my lessons to meet individual needs and goals.
                    </p>
                </section>

                <section className="resume">
                    <h2>Resume Highlights</h2>
                    <ul>
                        <li>Master's degree in Piano Performance from [University Name]</li>
                        <li>Certified instructor with [Certification Organization]</li>
                        <li>[X] years of teaching experience with students of all ages and levels</li>
                        <li>Winner of [Notable Competition or Award]</li>
                    </ul>
                </section>

                <section className="performance">
                    <h2>Performance Experience</h2>
                    <ul>
                        <li>Solo recitals at [Venue Names]</li>
                        <li>Featured performer with [Orchestra or Ensemble Name]</li>
                        <li>Regular performances at [Local Venue or Event]</li>
                        <li>Collaborative pianist for [Event or Organization]</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default About;