import React from 'react';

function Contact() {
    return (
        <div className="contact-page">
            <h1>Contact Kamryn Shepherd Piano</h1>

            <section className="contact-info">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you! Whether you have questions about lessons, want to schedule a consultation, or just want to say hello, please don't hesitate to reach out.</p>

                <div className="contact-details">
                    <h3>Email</h3>
                    <p><a href="mailto:kamryn@example.com">kamryn@example.com</a></p>

                    <h3>Phone</h3>
                    <p>(123) 456-7890</p>

                    <h3>Social Media</h3>
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com/kamrynshepherdpiano" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com/kamrynshepherdpiano" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.youtube.com/kamrynshepherdpiano" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                    </ul>
                </div>
            </section>

            <section className="location">
                <h2>Visit Our Studio</h2>
                <p>Lessons are held at our welcoming studio in the heart of [City Name].</p>
                <address>
                    123 Music Lane<br />
                    City Name, State 12345<br />
                    United States
                </address>
            </section>
        </div>
    );
}

export default Contact;