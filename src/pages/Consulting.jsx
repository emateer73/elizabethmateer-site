import React, { useState } from 'react';
import './Consulting.css';
import Button from '../components/Button';

const Consulting = () => {
    const [openSections, setOpenSections] = useState({
        psychotherapy: false,
        coaching: false,
        intensives: false
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="consulting-landing-page">
            <div className="container consulting-landing-container">
                {/* Hero Section */}
                <section className="consulting-hero">
                    <h1 className="page-title text-center">Consulting</h1>
                    <div className="consulting-hero-content">
                        <p>
                            Dr. Mateer provides strategic advisory at the intersection of psychology, neuroscience, creativity, and systems design.
                        </p>
                        <p>
                            Her consulting work centers on clarifying ideas, sharpening arguments, and strengthening the conceptual and psychological foundations beneath complex projects.
                        </p>
                        <p>
                            She works with select publishers, founders, research teams, media organizations, and creative companies seeking rigorous psychological insight, intellectual depth, and high-level strategic thinking.
                        </p>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Engagement Areas */}
                <section className="engagement-areas-section">
                    <h2 className="section-heading text-center">Select Engagement Areas</h2>
                    <div className="engagement-list">
                        <div className="engagement-item">
                            <h3>Manuscript & Book Advisory</h3>
                            <p>Strategic advisory for academic, nonfiction, and trade projects engaging with psychology, identity, cognition, creativity, or human behavior.</p>
                        </div>
                        <div className="engagement-item">
                            <h3>Editorial & Media Consulting</h3>
                            <p>Psychological insight and conceptual review for articles, podcasts, media projects, and public-facing narratives.</p>
                        </div>
                        <div className="engagement-item">
                            <h3>Research Translation</h3>
                            <p>Translating complex psychological and cognitive science concepts into clear, compelling, high-impact communication.</p>
                        </div>
                        <div className="engagement-item">
                            <h3>Founder & Technology Advisory</h3>
                            <p>Strategic consulting for founders and teams working at the intersection of psychology, cognition, mental health, creativity, and emerging technology.</p>
                        </div>
                        <div className="engagement-item">
                            <h3>Thought Leadership & Intellectual Positioning</h3>
                            <p>Advisory support around thematic development, conceptual clarity, narrative cohesion, and psychologically informed public-facing work.</p>
                        </div>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Engagement Structure */}
                <section className="engagement-structure-section">
                    <h2 className="section-heading text-center">Engagement Structure</h2>
                    <div className="structure-text text-center">
                        <p>
                            Consulting engagements are structured as defined projects, retained advisory relationships, or short-term strategic collaborations.
                        </p>
                        <p>
                            A limited number of consulting engagements are accepted each quarter to ensure depth, rigor, discretion, and individualized attention.
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="consulting-cta-section text-center">
                    <h2 className="section-heading">Inquiries</h2>
                    <p className="cta-intro">For collaboration inquiries:</p>
                    <Button to="/consulting-inquiry" variant="primary">Submit a Consulting Inquiry</Button>
                </section>

                <hr className="editorial-divider private-work-divider" />

                {/* Select Private Work Section */}
                <section className="private-work-section">
                    <h2 className="private-work-section-title text-center">Select Private Work</h2>
                    <div className="private-work-intro text-center">
                        <p>
                            In addition to consulting, Dr. Mateer works with a limited number of private clients through psychotherapy, coaching and advisory, and focused intensives.
                        </p>
                        <p>
                            This work is highly selective and designed for thoughtful, high-functioning individuals navigating transition, reinvention, creativity, identity shifts, burnout, and meaningful change.
                        </p>
                    </div>

                    {/* Accordion Sections */}
                    <div className="accordions-container private-work-accordions">
                        
                        {/* ACCORDION 1: Psychotherapy */}
                        <div className={`details-accordion ${openSections.psychotherapy ? 'open' : ''}`}>
                            <button 
                                className="accordion-header" 
                                onClick={() => toggleSection('psychotherapy')}
                                aria-expanded={openSections.psychotherapy}
                            >
                                <span className="accordion-main-title">Psychotherapy</span>
                                <span className="accordion-icon">{openSections.psychotherapy ? '−' : '+'}</span>
                            </button>
                            
                            <div className="accordion-content">
                                <div className="accordion-inner">
                                    <p className="accordion-subtitle">Available to residents of New York and Washington</p>
                                    
                                    <div className="accordion-body-text">
                                        <p>
                                            I offer private telehealth psychotherapy for adults seeking focused, evidence-based psychological work around identity, anxiety, burnout, perfectionism, life transitions, creativity, and emotional well-being.
                                        </p>
                                        <p>
                                            My clinical approach integrates Acceptance and Commitment Therapy (ACT), cognitive behavioral approaches, mindfulness-based work, and insight-oriented exploration. Therapy is collaborative, engaged, and forward-moving, with an emphasis on both understanding and implementation.
                                        </p>
                                        <p>
                                            Rather than indefinite open-ended treatment, I often work with clients over a focused period of time centered around clearly defined goals and areas of growth.
                                        </p>
                                    </div>

                                    <div className="accordion-sub-grid">
                                        <div className="sub-grid-section">
                                            <h3 className="sub-section-title">Areas of Focus</h3>
                                            <ul className="minimalist-bullets">
                                                <li>identity and life transitions</li>
                                                <li>burnout and chronic stress</li>
                                                <li>perfectionism and overthinking</li>
                                                <li>creativity and creative blocks</li>
                                                <li>anxiety and emotional resilience</li>
                                                <li>meaning, purpose, and direction</li>
                                                <li>relocation and major life changes</li>
                                                <li>high-achiever pressure and self-concept</li>
                                            </ul>
                                        </div>
                                        <div className="sub-grid-section">
                                            <h3 className="sub-section-title">Details</h3>
                                            <ul className="minimalist-bullets">
                                                <li>Virtual sessions only</li>
                                                <li>50-minute sessions</li>
                                                <li>Private pay</li>
                                                <li>Superbills available upon request</li>
                                                <li>Limited openings released at a time</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="investment-footer">
                                        <span className="investment-label">Investment</span>
                                        <span className="investment-value">$300 per session</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ACCORDION 2: Coaching & Advisory */}
                        <div className={`details-accordion ${openSections.coaching ? 'open' : ''}`}>
                            <button 
                                className="accordion-header" 
                                onClick={() => toggleSection('coaching')}
                                aria-expanded={openSections.coaching}
                            >
                                <span className="accordion-main-title">Coaching & Advisory</span>
                                <span className="accordion-icon">{openSections.coaching ? '−' : '+'}</span>
                            </button>
                            
                            <div className="accordion-content">
                                <div className="accordion-inner">
                                    <p className="accordion-subtitle">Available worldwide</p>
                                    
                                    <div className="accordion-body-text">
                                        <p>
                                            Coaching and advisory work is designed for individuals seeking psychologically informed support around identity, reinvention, creativity, decision-making, visibility, performance, and meaningful life or career transitions.
                                        </p>
                                        <p>
                                            This work is especially well suited for founders, creatives, writers, professionals, and high-functioning individuals who are navigating periods of growth, uncertainty, or significant change.
                                        </p>
                                        <p>
                                            Unlike psychotherapy, coaching and advisory work is not focused on mental health treatment or diagnosis. Instead, it combines psychological insight, strategic reflection, and concrete action around a particular challenge, transition, or direction.
                                        </p>
                                    </div>

                                    <div className="accordion-sub-grid">
                                        <div className="sub-grid-section">
                                            <h3 className="sub-section-title">Areas of Work</h3>
                                            <ul className="minimalist-bullets">
                                                <li>identity shifts and reinvention</li>
                                                <li>creative direction and creative blocks</li>
                                                <li>entrepreneurship and founder psychology</li>
                                                <li>visibility and public-facing work</li>
                                                <li>burnout and recalibration</li>
                                                <li>decision-making and life architecture</li>
                                                <li>transitions in career, relationships, or location</li>
                                                <li>aligning ambition with meaning and sustainability</li>
                                            </ul>
                                        </div>
                                        <div className="sub-grid-section">
                                            <h3 className="sub-section-title">Details</h3>
                                            <ul className="minimalist-bullets">
                                                <li>Available worldwide</li>
                                                <li>Virtual sessions</li>
                                                <li>Selective and limited availability</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="investment-footer">
                                        <span className="investment-label">Investment</span>
                                        <span className="investment-value">$350 per session</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ACCORDION 3: Half-Day Intensives */}
                        <div className={`details-accordion ${openSections.intensives ? 'open' : ''}`}>
                            <button 
                                className="accordion-header" 
                                onClick={() => toggleSection('intensives')}
                                aria-expanded={openSections.intensives}
                            >
                                <span className="accordion-main-title">Half-Day Intensives</span>
                                <span className="accordion-icon">{openSections.intensives ? '−' : '+'}</span>
                            </button>
                            
                            <div className="accordion-content">
                                <div className="accordion-inner">
                                    <p className="accordion-subtitle">Available worldwide</p>
                                    
                                    <div className="accordion-body-text">
                                        <p>
                                            Half-day intensives are designed for individuals seeking focused, high-depth work around a specific transition, decision, block, or identity shift.
                                        </p>
                                        <p>
                                            These sessions are immersive and strategic, allowing space to move beyond surface-level insight into meaningful clarity, psychological integration, and actionable next steps.
                                        </p>
                                        <p>
                                            Intensives are particularly helpful for individuals who feel stuck, overwhelmed, fragmented, or at an important crossroads personally or professionally.
                                        </p>
                                    </div>

                                    <div className="accordion-sub-grid">
                                        <div className="sub-grid-section">
                                            <h3 className="sub-section-title">Common Intensive Themes</h3>
                                            <ul className="minimalist-bullets">
                                                <li>career or life transitions</li>
                                                <li>identity reinvention</li>
                                                <li>creative blocks or loss of direction</li>
                                                <li>burnout and recalibration</li>
                                                <li>entrepreneurship and next-stage growth</li>
                                                <li>visibility and self-concept</li>
                                                <li>major decisions and competing paths</li>
                                                <li>restructuring life around deeper alignment and meaning</li>
                                            </ul>
                                        </div>
                                        <div className="sub-grid-section">
                                            <h3 className="sub-section-title">What’s Included</h3>
                                            <ul className="minimalist-bullets">
                                                <li>One 3-hour private virtual intensive session</li>
                                                <li>Personalized reflection and strategy exercises as relevant</li>
                                                <li>One 30-minute follow-up check-in session scheduled afterward</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="investment-footer">
                                        <span className="investment-label">Investment</span>
                                        <span className="investment-value">Investment discussed upon inquiry</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA Section */}
                    <div className="private-work-request text-center">
                        <h3 className="request-title">Request to Work Together</h3>
                        <div className="request-body">
                            <p>
                                Because this work is intentionally limited and highly individualized, a small number of openings are released periodically.
                            </p>
                            <p>
                                If you are interested in working together, please submit an inquiry with a brief description of what you are seeking support around.
                            </p>
                        </div>
                        
                        <div className="request-cta">
                            <Button to="/private-work-inquiry" variant="primary" className="cta-btn-refined">
                                Apply to Work Together
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Consulting;
