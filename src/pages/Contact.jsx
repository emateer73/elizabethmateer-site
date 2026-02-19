import React, { useState } from 'react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiryType: 'Media / Interview',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic
        alert('Thank you for your message. This is a demo form.');
        console.log(formData);
    };

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
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inquiryType">Inquiry Type</label>
                            <select
                                id="inquiryType"
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleChange}
                            >
                                <option value="Media / Interview">Media / Interview</option>
                                <option value="Speaking">Speaking</option>
                                <option value="Writing / Editorial">Writing / Editorial</option>
                                <option value="Collaboration">Collaboration</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <Button variant="primary" type="submit">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
