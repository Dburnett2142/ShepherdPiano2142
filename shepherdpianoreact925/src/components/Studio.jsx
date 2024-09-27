// Studio.jsx
import React from 'react';

function Studio() {
    return (
        <div className="studio-page">
            <main>
                <h1>Kamryn Shepherd Piano Studio</h1>

                <section className="teaching-approach">
                    <h2>Teaching Approach</h2>
                    <p>
                        At Kamryn Shepherd Piano Studio, we believe in nurturing each student's musical journey
                        through personalized instruction, positive reinforcement, and a balanced curriculum.
                        Our lessons focus on developing technical skills, music theory understanding, and
                        creative expression.
                    </p>
                </section>

                <section className="lesson-types">
                    <h2>Lesson Types</h2>
                    <h3>Individual Lessons</h3>
                    <p>
                        One-on-one lessons tailored to your specific needs and goals. Perfect for focused,
                        personalized instruction at any skill level.
                    </p>
                    <h3>Group Lessons</h3>
                    <p>
                        Small group sessions that encourage peer learning and collaboration. Ideal for
                        beginners or those looking for a more social learning experience.
                    </p>
                </section>

                <section className="studio-policy">
                    <h2>Studio Policy</h2>
                    <ul>
                        <li>Regular practice is expected and crucial for progress</li>
                        <li>24-hour notice required for lesson cancellations</li>
                        <li>Recitals held twice a year to showcase student progress</li>
                        <li>Parents are welcome to observe lessons</li>
                    </ul>
                </section>

                <section className="rates">
                    <h2>Rates and Payment Information</h2>
                    <ul>
                        <li>30-minute lesson: $[X]</li>
                        <li>45-minute lesson: $[Y]</li>
                        <li>60-minute lesson: $[Z]</li>
                        <li>Group lessons (4-6 students): $[W] per student</li>
                    </ul>
                    <p>
                        Payment is due at the beginning of each month. We accept cash, checks, and major credit cards.
                    </p>
                </section>

                <section className="teaching-image">
                    {/* Replace with actual image path */}
                    <img src="/pianoicon.png" alt="Kamryn Shepherd performing" />
                </section>
            </main>
        </div>
    );
}

export default Studio;