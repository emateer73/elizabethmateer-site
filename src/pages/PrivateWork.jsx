import React, { useState } from 'react';
import './PrivateWork.css';
import Button from '../components/Button';

const PrivateWork = () => {
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
        <div className="private-work-page">
            <div className="container private-work-container">
                {/* Hero Section */}
                <header className="private-work-hero">
                    <h1 className="page-title text-center private-work-title">Private Work</h1>
                    <div className="private-work-hero-content">
                        <p>
                            I work with a limited number of individuals through either psychotherapy or coaching and advisory work, depending on location, goals, and scope.
                        </p>
                        <p>
                            My work is designed for thoughtful, high-functioning individuals navigating identity shifts, transition, ambition, burnout, creativity, reinvention, and meaningful change. Many of the people I work with are outwardly successful but internally uncertain about what comes next.
                        </p>
                        <p>
                            This is not high-volume or passive work. I intentionally keep my caseload small in order to offer depth, focus, and individualized attention.
                        </p>
                        <p className="hero-credentials-tagline">
                            Clinical psychologist. Neuropsychology fellow at Harvard Medical School. Writer and founder.
                        </p>
                    </div>
                </header>
                
                <hr className="editorial-divider" />

                {/* This Work Is Best Suited For */}
                <section className="suited-for-section content-section">
                    <h2 className="section-heading text-center">This Work Is Best Suited For</h2>
                    <ul className="elegant-stacked-list">
                        <li>founders and entrepreneurs</li>
                        <li>writers, artists, and creatives</li>
                        <li>physicians, academics, and professionals</li>
                        <li>high-achieving women</li>
                        <li>individuals navigating major transitions or reinvention</li>
                        <li>psychologically minded people seeking clarity, direction, and meaningful forward movement</li>
                    </ul>
                </section>

                <hr className="editorial-divider" />

                {/* Accordion Sections */}
                <div className="accordions-container">
                    
                    {/* ACCORDION 1: Psychotherapy */}
                    <div className={`details-accordion ${openSections.psychotherapy ? 'open' : ''}`}>
                        <button 
                            className="accordion-header" 
                            onClick={() => toggleSection('psychotherapy')}
                            aria-expanded={openSections.psychotherapy}
                        >
                            <div className="accordion-title-group">
                                <h2 className="accordion-main-title">Psychotherapy</h2>
                            </div>
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
                            <div className="accordion-title-group">
                                <h2 className="accordion-main-title">Coaching & Advisory</h2>
                            </div>
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
                            <div className="accordion-title-group">
                                <h2 className="accordion-main-title">Half-Day Intensives</h2>
                            </div>
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
                                    <span className="investment-value">Investment discussed upon inquiry</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom CTA Section */}
                <section className="content-section inquiry-section text-center">
                    <hr className="editorial-divider" />
                    <h2 className="section-heading">Request to Work Together</h2>
                    <div className="inquiry-body">
                        <p>
                            Because I intentionally keep this work limited and highly individualized, I release a small number of openings at a time.
                        </p>
                        <p>
                            If you are interested in working together, please complete the inquiry form below with a brief description of what you are seeking support around. If it seems like a strong fit, I will reach out with next steps and availability.
                        </p>
                    </div>
                    
                    <div className="availability-cta">
                        <Button to="/private-work-inquiry" variant="primary" className="cta-btn-refined">
                            Apply to Work Together
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivateWork;
