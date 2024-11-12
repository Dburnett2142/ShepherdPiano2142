import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <main>

                <div className="featured-image">
                    <img src="/pianoKeys.jpg" alt="Keys of a piano" />
                </div>

                <section className="introduction">
                    <h2>Teaching Philosophy</h2>
                    <p>
                        My love for music stems from the emotion and connection I feel while both playing and listening.
                        My passion developed early on when I realized that music is a language that conveys messages that words cannot.
                        This is why I teach! I would love for everyone to speak the language of music. The importance of understanding this language is pivotal for our success in connecting with each other in society.
                        This skill is especially important to the development of the whole person.
                        This is why it is crucial to introduce music to children at a young age. By familiarizing yourself with this art, you begin to develop cognitive and emotional maturity in such a way only music can provide.
                    </p>
                </section>

                <section className="cta">
                    <h2>Ready to Begin?</h2>
                    <p>Start your musical journey today!</p>
                    <Link to="/scheduling" className="cta-button">Schedule a Lesson</Link>
                </section>
            </main>

        </div>
    );
}

export default Home;