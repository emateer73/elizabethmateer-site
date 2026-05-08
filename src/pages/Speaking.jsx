import React from 'react';
import Button from '../components/Button';
import { ExternalLink } from 'lucide-react';
import FoundersMindImg from "../assets/founder's mind event.png";
import NeuroImg from "../assets/neuro.jpg";
import './Speaking.css';

const Speaking = () => {
    return (
        <div className="speaking-page">
            <div className="container speaking-container">
                {/* Hero / Title Section */}
                <header className="speaking-hero">
                    <h1 className="page-title text-center">Speaking & Workshops</h1>
                    <div className="speaking-intro">
                        <p>
                            Dr. Mateer speaks on the intersections of psychology, identity, creativity, and the future of human cognition — translating complex psychological and neurocognitive ideas into conversations that are intellectually rigorous, emotionally resonant, and practically applicable.
                        </p>
                        <p>
                            Her work explores how individuals think, create, adapt, and construct meaning in periods of transition, ambition, uncertainty, and rapid technological change.
                        </p>
                    </div>
                </header>

                <hr className="editorial-divider" />

                {/* Featured Event Section */}
                <section className="featured-event-section">
                    <h2 className="section-heading text-center">Featured Event</h2>
                    <div className="featured-event-card">
                        <div className="event-image-container">
                            <img src={FoundersMindImg} alt="The Founder's Mind Event" className="event-featured-image" />
                        </div>
                        <p className="event-label">Upcoming Talk</p>
                        <h3 className="event-title">The Founder’s Mind</h3>
                        <h4 className="event-venue">Boston Tech Week 2026</h4>
                        
                        <div className="event-body">
                            <p>
                                “A conversation exploring the psychology of entrepreneurship, cognitive flexibility, creativity, identity, burnout, and the mental demands of building in high-performance environments.”
                            </p>
                        </div>
                        
                        <div className="event-meta">
                            <span>Boston, MA</span>
                            <span className="meta-dot">•</span>
                            <span>May 29, 2026</span>
                            <span className="meta-dot">•</span>
                            <span>Hosted as part of Boston Tech Week.</span>
                        </div>
                        
                        <div className="event-cta">
                            <Button 
                                href="https://partiful.com/e/baLjGX6g9byOPC7TwycH" 
                                variant="outline" 
                                className="btn-rsvp"
                                external
                            >
                                RSVP <ExternalLink size={14} style={{ marginLeft: '6px', opacity: 0.6 }} />
                            </Button>
                        </div>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Selected Conversations & Media Section */}
                <section className="speaking-section media-section">
                    <h2 className="section-heading text-center">Selected Conversations & Media</h2>
                    <div className="media-feature-card">
                        <div className="media-thumbnail">
                            <img src={NeuroImg} alt="The Neuroplasticity of Identity" />
                        </div>
                        <div className="media-content">
                            <p className="media-label">Mind Tricks Radio</p>
                            <h3 className="media-entry-title">The Neuroplasticity of Identity</h3>
                            <p className="media-description">
                                “A conversation on identity, neuroplasticity, self-narrative, psychological flexibility, and the ways memory and experience shape who we become.”
                            </p>
                            <p className="media-description-secondary">
                                “We discuss creativity, emotional memory, reinvention, and why identity is not fixed, but continually constructed over time.”
                            </p>
                            <div className="media-cta">
                                <Button 
                                    href="https://open.spotify.com/episode/4ZdtkoghB4Vj8Kvk97AYZZ?si=LsoHFDfUT4eynYUzXo1xeg&nd=1&dlsi=0d197ad2dbd742c7" 
                                    variant="outline" 
                                    className="btn-listen"
                                    external
                                >
                                    Listen to the Episode <ExternalLink size={14} style={{ marginLeft: '6px', opacity: 0.6 }} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Selected Topics Section */}
                <section className="speaking-section">
                    <h2 className="section-heading text-center">Selected Speaking Topics</h2>
                    <div className="speaking-topics-list">
                        <div className="topic-item">
                            <h3>The Neuropsychology of Creativity</h3>
                            <p>How memory, attention, identity, and cognitive flexibility shape creative thinking and meaning-making.</p>
                        </div>
                        <div className="topic-item">
                            <h3>Identity & Self-Authorship</h3>
                            <p>The psychology of reinvention, transition, and constructing a meaningful life in rapidly changing environments.</p>
                        </div>
                        <div className="topic-item">
                            <h3>The Founder’s Mind</h3>
                            <p>Entrepreneurship through the lens of psychology, cognition, burnout, uncertainty, and identity.</p>
                        </div>
                        <div className="topic-item">
                            <h3>AI & the Future of Cognitive Work</h3>
                            <p>AI, neuropsychology, and the changing relationship between human cognition, creativity, workflow, and systems design.</p>
                        </div>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Available Formats Section */}
                <section className="speaking-section">
                    <h2 className="section-heading text-center">Available Formats</h2>
                    <ul className="elegant-stacked-list text-center">
                        <li>Keynote talks</li>
                        <li>Panels & moderated conversations</li>
                        <li>Workshops</li>
                        <li>University guest lectures</li>
                        <li>Founder and leadership sessions</li>
                        <li>Creative and literary programming</li>
                        <li>Podcast and media appearances</li>
                    </ul>
                </section>

                <hr className="editorial-divider" />

                {/* Who This Is For Section */}
                <section className="speaking-section">
                    <h2 className="section-heading text-center">Who This Is For</h2>
                    <ul className="elegant-stacked-list text-center">
                        <li>Universities & academic institutions</li>
                        <li>Conferences & symposia</li>
                        <li>Corporate leadership & innovation teams</li>
                        <li>Founder and entrepreneurial communities</li>
                        <li>Creative organizations & literary spaces</li>
                        <li>Media, podcasts, and public conversations</li>
                    </ul>
                </section>

                <hr className="editorial-divider" />

                {/* Speaking Inquiries Section */}
                <section className="speaking-cta text-center">
                    <h2 className="section-heading">Speaking Inquiries</h2>
                    <div className="cta-body">
                        <p>
                            Dr. Mateer is available for select speaking engagements, workshops, panels, and conversations.
                        </p>
                    </div>
                    <div className="availability-cta">
                        <Button to="/contact" variant="primary" className="cta-btn-refined">
                            Inquire About Speaking
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Speaking;
