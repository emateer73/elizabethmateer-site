import React, { useState } from 'react';
import './PrivateWork.css';
import Button from '../components/Button';

const PrivateWork = () => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    return (
        <div className="private-work-page">
            <div className="container private-work-container">
                {/* Hero Section */}
                <section className="private-work-hero">
                    <h1 className="page-title text-center private-work-title">Private 1:1 Work</h1>
                    <div className="private-work-hero-content">
                        <p>
                            I work with a small number of clients at a time, offering focused psychological work for individuals navigating identity, direction, and change.
                        </p>
                    </div>
                </section>
                
                <hr className="editorial-divider" />

                {/* Body Content */}
                <div className="private-work-content">
                    {/* 1. Intro / Positioning */}
                    <section className="content-section">
                        <p>
                            This allows for a level of depth, focus, and intentionality that is difficult to achieve in traditional, high-volume therapy settings.
                        </p>
                        <p>
                            At most, I work with 2–4 clients at any given time. When my caseload is full, I maintain a waitlist.
                        </p>
                    </section>

                    {/* 2. Who This Is For */}
                    <section className="content-section">
                        <h2 className="section-heading">Who This Is For</h2>
                        <p>
                            I work best with individuals who are thoughtful, self-aware, and motivated for change—but feel stuck, overwhelmed, or unclear about what comes next.
                        </p>
                        <p>Many of my clients are:</p>
                        <ul className="elegant-list">
                            <li>Burned-out high performers who feel disconnected from their work or identity</li>
                            <li>Professionals in transition navigating career shifts, relocation, or major life changes</li>
                            <li>Creatives, writers, and artists seeking greater clarity, self-trust, and momentum</li>
                            <li>High-achieving women who appear "together" on the outside but feel uncertain internally</li>
                        </ul>
                        <p>
                            Often, they are not in crisis—but they know something isn’t working.
                            They’re looking for clarity, direction, and a way forward that actually feels aligned.
                        </p>
                    </section>

                    {/* 3. My Approach */}
                    <section className="content-section">
                        <h2 className="section-heading">My Approach</h2>
                        <p>
                            My work is grounded in Acceptance and Commitment Therapy (ACT), integrating cognitive behavioral techniques, mindfulness-based practices, and a direct, solution-oriented style.
                        </p>
                        <p>We focus on:</p>
                        <ul className="elegant-list">
                            <li>clarifying what actually matters to you</li>
                            <li>understanding the patterns that keep you stuck</li>
                            <li>building psychological flexibility</li>
                            <li>taking concrete, aligned action</li>
                        </ul>
                        <p>
                            I am an active and engaged therapist. This is not passive or purely exploratory work. The goal is not just insight—but movement.
                        </p>
                    </section>

                    {/* 4. How I Work */}
                    <section className="content-section">
                        <h2 className="section-heading">How I Work</h2>
                        <p>
                            I approach therapy as focused, forward-moving work.
                        </p>
                        <p>
                            Rather than open-ended, indefinite treatment, I typically work with clients over a structured period of 8–12 weeks, though this can be adjusted depending on individual needs.
                        </p>
                        <p>
                            Together, we define clear goals early on, work actively toward them, and reassess as needed.
                        </p>
                        <p>
                            This model works best for individuals who are ready to engage, reflect, and take action.
                        </p>
                    </section>

                    {/* 5. Details Accordion */}
                    <section className="content-section">
                        <div className={`details-accordion ${isDetailsOpen ? 'open' : ''}`}>
                            <button 
                                className="accordion-header" 
                                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                                aria-expanded={isDetailsOpen}
                            >
                                <h2 className="section-heading accordion-title">Details</h2>
                                <span className="accordion-icon">{isDetailsOpen ? '−' : '+'}</span>
                            </button>
                            
                            <div className="accordion-content">
                                <div className="accordion-inner">
                                    <div className="detail-item">
                                        <span className="detail-label">Fee</span>
                                        <span className="detail-value">$250 per session</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Format</span>
                                        <span className="detail-value">Virtual</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Location</span>
                                        <span className="detail-value">New York and Washington State</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Payment</span>
                                        <span className="detail-value">Private pay only</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Insurance</span>
                                        <span className="detail-value">Superbills available for potential out-of-network reimbursement</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 6. Availability & CTA */}
                    <section className="content-section availability-section text-center">
                        <h2 className="section-heading">Availability</h2>
                        <p>
                            Because I intentionally keep my practice small, availability is limited.<br/>
                            A small number of openings are released at a time, with a waitlist when full.
                        </p>
                        
                        <div className="availability-cta">
                            <Button to="/private-work-inquiry" variant="primary" className="cta-btn-refined">
                                Request to Work Together
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivateWork;
