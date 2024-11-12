import React from 'react';

function Contact() {
    return (
        <div className="contact-page container">
            <h1>Contact Kamryn Shepherd Piano</h1>
            <section className="contact-info">
                <h2>Get in Touch</h2>
                <p>I'd love to hear from you! Whether you have questions about lessons or want to schedule a consultation, please don't hesitate to reach out.</p>
                <div className="contact-details">
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p><a href="mailto:kamrynshepherd@mail.weber.edu">kamrynshepherd@mail.weber.edu</a></p>
                    </div>
                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p>(801) 485-7843</p>
                    </div>
                </div>
            </section>
            <section className="contact-form">
                <h2>Contact Form</h2>
                <p>If you have any questions, please feel free to contact me</p>
                <p><small>* Indicates required field</small></p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label>Best time to contact you *</label>
                        <div className="radio-group">
                            <label>
                                <input type="radio" name="contact-time" value="morning" required /> Morning
                            </label>
                            <label>
                                <input type="radio" name="contact-time" value="afternoon" /> Afternoon
                            </label>
                            <label>
                                <input type="radio" name="contact-time" value="evening" /> Evening
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment *</label>
                        <textarea id="comment" name="comment" required></textarea>
                    </div>
                    <div className="submit-button-container">
                        <button type="submit" className="submit-button">Send</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Contact;