import React from 'react';
import Button from '../components/Button';
import { Users, Mic, BookOpen, Coffee } from 'lucide-react';
import './Speaking.css';

const Speaking = () => {
    return (
        <div className="speaking-page">
            <div className="container">
                <h1 className="page-title text-center">Speaking & Workshops</h1>

                <div className="speaking-intro">
                    <p>
                        Dr. Mateer speaks on the intersections of brain science, creativity, and the human experience, offering insights that are both scientifically grounded and deeply resonant.
                    </p>
                </div>

                <section className="speaking-section">
                    <h2 className="section-heading text-center">Selected Topics</h2>
                    <ul className="speaking-topics-simple-list">
                        <li>The Neuropsychology of Creativity</li>
                        <li>Identity & Self-Authorship</li>
                        <li>AI and the future of cognitive work (clinical documentation, workflow, and systems design)</li>
                    </ul>
                </section>

                <section className="speaking-section bg-light-panel">
                    <h2 className="section-heading text-center">Who This Is For</h2>
                    <div className="audience-grid">
                        <div className="audience-item">
                            <Users className="audience-icon" />
                            <span>Universities & Academic Institutions</span>
                        </div>
                        <div className="audience-item">
                            <Mic className="audience-icon" />
                            <span>Conferences & Symposia</span>
                        </div>
                        <div className="audience-item">
                            <Coffee className="audience-icon" />
                            <span>Corporate Wellness & Leadership</span>
                        </div>
                        <div className="audience-item">
                            <BookOpen className="audience-icon" />
                            <span>Creative Communities & Literary Orgs</span>
                        </div>
                    </div>
                </section>

                <div className="speaking-cta">
                    <h2>Interested in having Dr. Mateer speak?</h2>
                    <Button to="/contact" variant="primary">Inquire about speaking</Button>
                </div>
            </div>
        </div>
    );
};

export default Speaking;
