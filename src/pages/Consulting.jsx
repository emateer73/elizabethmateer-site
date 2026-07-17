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
            </div>
        </div>
    );
};

export default Consulting;
