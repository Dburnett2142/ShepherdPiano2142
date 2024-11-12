import React from 'react';

function Scheduling() {
    return (
        <div className="scheduling-page container">
            <h1>Schedule a Lesson</h1>
            <section className="calendar-section">
                <h2>Available Time Slots</h2>
                <p>Please check the calendar below for current availability:</p>
                <div className="google-calendar">
                    <iframe
                        src="https://calendar.app.google/WRRJ1kiTQzHWBmFX8"
                        width="800"
                        height="600"
                        frameBorder="0"
                        scrolling="no"
                        title="Lesson Availability Calendar"
                    ></iframe>
                </div>
            </section>
            <section className="cancellation-policy">
                <h2>Cancellation Policy</h2>
                <p>
                    We understand that circumstances may arise that require you to cancel or reschedule your lesson.
                    To maintain a fair and efficient scheduling system:
                </p>
                <ul>
                    <li>Please provide at least 24 hours notice for any cancellations or rescheduling requests.</li>
                    <li>Lessons cancelled with less than 24 hours notice will be charged the full lesson fee.</li>
                    <li>In case of illness or emergency, please contact us as soon as possible.</li>
                    <li>We will make every effort to reschedule lessons cancelled due to instructor absence or inclement weather.</li>
                </ul>
            </section>
        </div>
    );
}

export default Scheduling;