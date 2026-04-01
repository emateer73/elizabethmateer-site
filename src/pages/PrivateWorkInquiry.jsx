import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './PrivateWorkInquiry.css';
import Button from '../components/Button';

const PrivateWorkInquiry = () => {
    // Formspree endpoint for Private 1:1 Work
    const [state, handleSubmit] = useForm("xaqlbwoy");

    if (state.succeeded) {
        return (
            <div className="inquiry-page">
                <div className="container inquiry-container">
                    <div className="inquiry-confirmation">
                        <h1 className="page-title text-center confirmation-title">Thank you for your inquiry.</h1>
                        <p className="confirmation-text">
                            Because I keep my practice intentionally small, I review requests personally and will be in touch if it seems like there may be a fit.
                        </p>
                        <Button to="/" variant="text" className="cta-btn-refined">Return Home</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="inquiry-page">
            <div className="container inquiry-container">
                <header className="inquiry-header text-center">
                    <h1 className="page-title inquiry-title">Request to Work Together</h1>
                    <p className="inquiry-intro">
                        If this approach resonates with you, you’re welcome to submit an inquiry. Because I intentionally keep my practice small, I review all requests for fit before moving forward.
                    </p>
                    <p className="inquiry-intro">
                        If it seems like there may be a good fit, I will reach out to schedule a brief phone consultation.
                    </p>
                </header>

                <hr className="editorial-divider form-divider" />

                <form className="elegant-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name <span className="required">*</span></label>
                        <input type="text" id="name" name="name" required className="form-input" />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="form-group-row">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
                            <input type="email" id="email" name="email" required className="form-input" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone Number <span className="required">*</span></label>
                            <input type="tel" id="phone" name="phone" required className="form-input" />
                            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="state" className="form-label">State of Residence <span className="required">*</span></label>
                        <input type="text" id="state" name="state" required className="form-input" />
                        <ValidationError prefix="State" field="state" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="brings-you-here" className="form-label">What brings you here at this point in your life? <span className="required">*</span></label>
                        <textarea id="brings-you-here" name="brings-you-here" required className="form-textarea" rows="3" />
                        <ValidationError prefix="Brings You Here" field="brings-you-here" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hoping-to-work-on" className="form-label">What are you hoping to work on in therapy? <span className="required">*</span></label>
                        <textarea id="hoping-to-work-on" name="hoping-to-work-on" required className="form-textarea" rows="3" />
                        <ValidationError prefix="Hoping To Work On" field="hoping-to-work-on" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="why-a-fit" className="form-label">Why does this approach feel like a fit for you? <span className="required">*</span></label>
                        <textarea id="why-a-fit" name="why-a-fit" required className="form-textarea" rows="3" />
                        <ValidationError prefix="Why A Fit" field="why-a-fit" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="format-preference" className="form-label">Are you seeking short-term focused work, or open to discussing format? <span className="required">*</span></label>
                        <textarea id="format-preference" name="format-preference" required className="form-textarea" rows="2" />
                        <ValidationError prefix="Format Preference" field="format-preference" errors={state.errors} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="referral" className="form-label">How did you hear about me? <span className="required">*</span></label>
                        <input type="text" id="referral" name="referral" required className="form-input" />
                        <ValidationError prefix="Referral" field="referral" errors={state.errors} />
                    </div>

                    <div className="form-group checkbox-group">
                        <input type="checkbox" id="acknowledgement" name="acknowledgement" required className="form-checkbox" />
                        <label htmlFor="acknowledgement" className="form-label checkbox-label">
                            I understand that services are private pay only and currently available only to clients located in New York or Washington State.
                        </label>
                    </div>

                    <div className="form-actions text-center">
                        <button type="submit" className="btn-submit cta-btn-refined" disabled={state.submitting}>
                            {state.submitting ? "Submitting..." : "Submit Inquiry"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PrivateWorkInquiry;
