import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <main>

                <div className="featured-image">
                    {/* Replace with actual image path */}
                    <img src="/pianoicon.png" alt="Kamryn Shepherd performing" />
                </div>

                <section className="introduction">
                    <h2>Discover the Joy of Piano</h2>
                    <p>
                        Hello, I'm Kamryn Shepherd, a passionate piano instructor dedicated to helping students
                        of all ages and skill levels explore the beautiful world of music. Whether you're a
                        beginner looking to start your musical journey or an experienced player aiming to refine
                        your skills, I'm here to guide you every step of the way.
                    </p>
                </section>

                <section className="location">
                    <h2>Visit Our Studio</h2>
                    <p>
                        Conveniently located in [City Name], our welcoming studio provides the perfect
                        environment for learning and creativity. Come join us and let's make music together!
                    </p>
                    <address>
                        123 Music Lane<br />
                        City Name, State 12345<br />
                        United States
                    </address>
                </section>

                <section className="cta">
                    <h2>Ready to Begin?</h2>
                    <p>Start your musical journey today!</p>
                    <Link to="/scheduling" className="cta-button">Schedule a Lesson</Link>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Kamryn Shepherd Piano. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;