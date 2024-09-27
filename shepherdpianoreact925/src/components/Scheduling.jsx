import React from 'react';

function Scheduling() {
    return (
        <div className="scheduling-page">
            <h1>Schedule a Lesson</h1>

            <section className="lesson-info">
                <h2>Lesson Scheduling Information</h2>
                <p>
                    Lessons are available Monday through Friday from 3:00 PM to 8:00 PM,
                    and Saturdays from 10:00 AM to 4:00 PM. We offer 30-minute, 45-minute,
                    and 60-minute lesson slots to accommodate different needs and skill levels.
                </p>
            </section>

            <section className="calendar">
                <h2>Available Time Slots</h2>
                <p>Please check the calendar below for current availability:</p>
                <div className="google-calendar">
                    <iframe
                        src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2s6lAeew_r8ym4ZJ9bcEHHPKwYcew2C4vpHBAr5CKsTknCFiQtX9_ndbDr5WzYwMSoo3sve9wr"
                        style={{ border: 0 }}
                        width="800"
                        height="600"
                        frameBorder="0"
                        scrolling="no"
                        title="Lesson Availability Calendar"
                    ></iframe>
                </div>
            </section>

            <section className="booking-process">
                <h2>How to Book a Lesson</h2>
                <ol>
                    <li>Check the calendar for available time slots.</li>
                    <li>Call or email us to confirm your desired time slot.</li>
                    <li>Provide your name, contact information, and any relevant details about your skill level or goals.</li>
                    <li>Receive a confirmation email with lesson details and any preparation instructions.</li>
                </ol>
                <p>Contact: (123) 456-7890 or email@example.com</p>
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