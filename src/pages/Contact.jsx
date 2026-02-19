import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    // REPLACE "CONTACT_FORM_ID" WITH YOUR ACTUAL FORMSPREE FORM ID
    const [state, handleSubmit] = useForm("mykdprbk");

    if (state.succeeded) {
        return (
            <div className="contact-page">
                <div className="container">
                    <h1 className="page-title text-center">Thank You</h1>
                    <div className="contact-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh' }}>
                        <div className="contact-info" style={{ textAlign: 'center', width: '100%', maxWidth: '600px', border: 'none', padding: 0 }}>
                            <p className="contact-intro" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                                Your message has been sent successfully. I will be in touch shortly.
                            </p>
                            <Button to="/" variant="primary">Return Home</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-page">
            <div className="container">
                <h1 className="page-title text-center">Contact</h1>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-heading">Get in Touch</h2>
                        <p className="contact-intro">
                            For speaking inquiries, writing collaborations, or media requests, please use the form.
                        </p>

                        <div className="direct-contact">
                            <p className="email-label">Email</p>
                            <a href="mailto:elizabethmateerphd@gmail.com" className="email-link">elizabethmateerphd@gmail.com</a>
                        </div>

                        <div className="clinical-note">
                            <p><strong>Note:</strong> For clinical inquiries, please contact your healthcare provider directly.</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inquiryType">Inquiry Type</label>
                            <select
                                id="inquiryType"
                                name="inquiryType"
                            >
                                <option value="Media / Interview">Media / Interview</option>
                                <option value="Speaking">Speaking</option>
                                <option value="Writing / Editorial">Writing / Editorial</option>
                                <option value="Collaboration">Collaboration</option>
                                <option value="Other">Other</option>
                            </select>
                            <ValidationError
                                prefix="Inquiry Type"
                                field="inquiryType"
                                errors={state.errors}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                            ></textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <Button variant="primary" type="submit" disabled={state.submitting}>
                            {state.submitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
