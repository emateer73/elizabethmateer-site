import React from 'react';
import './Consulting.css';
import Button from '../components/Button';

const Consulting = () => {
    return (
        <div className="consulting-landing-page">
            <div className="container consulting-landing-container">
                {/* Hero Section */}
                <section className="consulting-hero">
                    <h1 className="page-title text-center">Consulting</h1>
                    <div className="consulting-hero-content">
                        <p>
                            Elizabeth Mateer, Ph.D. provides strategic psychological advisory at the intersection of identity, cognition, and systems design. Her consulting work centers on clarity — clarifying ideas, sharpening arguments, and strengthening the psychological architecture beneath complex projects.
                        </p>
                        <p>
                            She works with select publishers, research teams, founders, and media organizations seeking rigorous psychological insight and structural depth.
                        </p>
                    </div>
                </section>

                {/* Engagement Areas */}
                <section className="engagement-areas-section">
                    <h2 className="section-heading text-center">Select Engagement Areas</h2>
                    <div className="engagement-list">
                        <div className="engagement-item">
                            <h3>Manuscript & Book Advisory</h3>
                            <p>Strategic review of academic and trade work addressing psychological themes.</p>
                        </div>
                        <div className="engagement-item">
                            <h3>Editorial & Media Review</h3>
                            <p>Psychological accuracy consultation for publishers and production teams.</p>
                        </div>
                        <div className="engagement-item">
                            <h3>Research Translation</h3>
                            <p>Advisory support in translating complex cognitive science into high-impact narratives.</p>
                        </div>
                        <div className="engagement-item">
                            <h3>Founder & Technology Advisory</h3>
                            <p>Strategic guidance for teams operating at the intersection of mental health, cognition, and emerging technology.</p>
                        </div>
                    </div>
                </section>

                {/* Engagement Structure */}
                <section className="engagement-structure-section">
                    <h2 className="section-heading text-center">Engagement Structure</h2>
                    <p className="structure-text text-center">
                        Consulting engagements are structured as defined projects or short-term advisory partnerships. A small number of collaborations are accepted each quarter to ensure depth, rigor, and discretion.
                    </p>
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
