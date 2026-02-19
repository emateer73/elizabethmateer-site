import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ConsultingInquiry.css';
import Button from '../components/Button';

const ConsultingInquiry = () => {
    // REPLACE "CONSULTING_FORM_ID" WITH YOUR ACTUAL FORMSPREE FORM ID
    const [state, handleSubmit] = useForm("CONSULTING_FORM_ID");

    if (state.succeeded) {
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
                            required
                            className="form-input"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="organization" className="form-label">Organization / Affiliation <span className="required">*</span></label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            required
                            className="form-input"
                        />
                        <ValidationError
                            prefix="Organization"
                            field="organization"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="form-input"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="overview" className="form-label">Project Overview <span className="required">*</span></label>
                        <textarea
                            id="overview"
                            name="overview"
                            required
                            className="form-textarea"
                            placeholder="Please include intended impact, audience, and key objectives."
                        />
                        <ValidationError
                            prefix="Project Overview"
                            field="overview"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="scope" className="form-label">Scope of Engagement</label>
                        <select
                            id="scope"
                            name="scope"
                            className="form-select"
                        >
                            <option value="">Select scope...</option>
                            <option value="Manuscript Advisory">Manuscript Advisory</option>
                            <option value="Editorial / Media Review">Editorial / Media Review</option>
                            <option value="Research Translation">Research Translation</option>
                            <option value="Founder / Technology Advisory">Founder / Technology Advisory</option>
                            <option value="Other">Other</option>
                        </select>
                        <ValidationError
                            prefix="Scope"
                            field="scope"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="timeline" className="form-label">Timeline</label>
                        <select
                            id="timeline"
                            name="timeline"
                            className="form-select"
                        >
                            <option value="">Select timeline...</option>
                            <option value="Immediate (0–1 month)">Immediate (0–1 month)</option>
                            <option value="1–3 months">1–3 months</option>
                            <option value="Flexible">Flexible</option>
                        </select>
                        <ValidationError
                            prefix="Timeline"
                            field="timeline"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="budget" className="form-label">Budget Range (Optional)</label>
                        <select
                            id="budget"
                            name="budget"
                            className="form-select"
                        >
                            <option value="">Select budget...</option>
                            <option value="$2,500–5,000">$2,500–5,000</option>
                            <option value="$5,000–10,000">$5,000–10,000</option>
                            <option value="$10,000+">$10,000+</option>
                            <option value="To be determined">To be determined</option>
                        </select>
                        <ValidationError
                            prefix="Budget"
                            field="budget"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-submit" disabled={state.submitting}>
                            {state.submitting ? "Sending..." : "Submit Inquiry"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConsultingInquiry;
