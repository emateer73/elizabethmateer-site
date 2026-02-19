import React, { useState } from 'react';
import './ConsultingInquiry.css';
import Button from '../components/Button';

const ConsultingInquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        overview: '',
        scope: '',
        timeline: '',
        budget: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend or email service
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="consulting-page">
                <div className="container consulting-container">
                    <div className="consulting-confirmation">
                        <h1 className="page-title text-center">Thank you.</h1>
                        <p className="confirmation-text">
                            If your project aligns, you will be contacted within 5–7 business days.
                        </p>
                        <Button to="/" variant="text">Return Home</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="consulting-page">
            <div className="container consulting-container">
                <header className="consulting-header">
                    <h1 className="page-title text-center">Consulting Inquiry</h1>
                    <p className="consulting-subtext text-center">
                        Consulting collaborations are reviewed on a rolling basis. Select projects are accepted each quarter.
                    </p>
                </header>

                <form className="consulting-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name <span className="required">*</span></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="organization" className="form-label">Organization / Affiliation <span className="required">*</span></label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="overview" className="form-label">Project Overview <span className="required">*</span></label>
                        <textarea
                            id="overview"
                            name="overview"
                            value={formData.overview}
                            onChange={handleChange}
                            required
                            className="form-textarea"
                            placeholder="Please include intended impact, audience, and key objectives."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="scope" className="form-label">Scope of Engagement</label>
                        <select
                            id="scope"
                            name="scope"
                            value={formData.scope}
                            onChange={handleChange}
                            className="form-select"
                        >
                            <option value="">Select scope...</option>
                            <option value="Manuscript Advisory">Manuscript Advisory</option>
                            <option value="Editorial / Media Review">Editorial / Media Review</option>
                            <option value="Research Translation">Research Translation</option>
                            <option value="Founder / Technology Advisory">Founder / Technology Advisory</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="timeline" className="form-label">Timeline</label>
                        <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="form-select"
                        >
                            <option value="">Select timeline...</option>
                            <option value="Immediate (0–1 month)">Immediate (0–1 month)</option>
                            <option value="1–3 months">1–3 months</option>
                            <option value="Flexible">Flexible</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="budget" className="form-label">Budget Range (Optional)</label>
                        <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="form-select"
                        >
                            <option value="">Select budget...</option>
                            <option value="$2,500–5,000">$2,500–5,000</option>
                            <option value="$5,000–10,000">$5,000–10,000</option>
                            <option value="$10,000+">$10,000+</option>
                            <option value="To be determined">To be determined</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-submit">Submit Inquiry</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConsultingInquiry;
