import React from 'react';

function Studio() {
    return (
        <div className="container">
            <div className="page-content studio-page">
                <h1>Kamryn Shepherd Piano Studio</h1>
                <section className="teaching-approach">
                    <section className="teaching-images">
                        <img src="/groupTeaching.png" alt="Kamryn Shepherd teaching group" />
                        <img src="/groupTeaching2.png" alt="Kamryn Shepherd teaching on whiteboard" />
                        <img src="/privateLessons.jpg" alt="Kamryn Shepherd teaching a private lessson" />
                    </section>
                    <h2>Teaching Approach</h2>
                    <p>
                        While teaching piano, I implement characteristics to help students develop their full potential.
                        Some of these characteristics being: Patience, enthusiasm, encouragement, understanding, and kindness.
                        These characteristics are attributed to my authentic, collected, and passionate demeanor.
                    </p>
                </section>
                <section className="lesson-types">
                    <h2>Lesson Types</h2>
                    <div className="lesson-types-container">
                        <div className="lesson-type">
                            <h3>Individual Lessons</h3>
                            <p>
                                One-on-one lessons tailored to your specific needs and goals. Perfect for focused,
                                personalized instruction at any skill level.
                            </p>
                        </div>
                        <div className="lesson-type">
                            <h3>Group Lessons</h3>
                            <p>
                                Small group sessions that encourage peer learning and collaboration. Ideal for
                                beginners or those looking for a more social learning experience.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="studio-policy">
                    <h2>Studio Policy</h2>
                    <ul>
                        <li>Regular practice is expected and crucial for progress</li>
                        <li>24-hour notice required for lesson cancellations</li>
                        <li>Recitals held twice a year to showcase student progress</li>
                        <li>Parents are welcome to observe lessons</li>
                        <li>Lessons are taught at student's preferred location (in their home/teachers home)</li>
                    </ul>
                </section>
                <section className="rates">
                    <h2>Rates and Payment Information</h2>
                    <p>Our lessons are billed on a monthly basis. Rates are as follows:</p>
                    <ul>
                        <li>30-minute lessons: $300 per month ($75 per lesson, 4 lessons per month)</li>
                        <li>45-minute lessons: $400 per month ($100 per lesson, 4 lessons per month)</li>
                    </ul>
                    <p>
                        Payment is due at the beginning of each month. We accept cash, checks, and major credit cards.
                    </p>
                    <p>
                        Note: Pricing is based on a four-lesson month. Months with five lessons will be pro-rated accordingly.
                    </p>
                </section>

            </div>
        </div>
    );
}

export default Studio;