import React from 'react';
import Button from '../components/Button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import FoundersMindImg from "../assets/founder's mind event.png";
import NeuroImg from "../assets/neuro.jpg";
import FoundersMind1 from "../assets/foundersmind1.jpg";
import FoundersMind2 from "../assets/foundersmind2.jpg";
import FoundersMind4 from "../assets/foundersmind4.jpg";
import './Speaking.css';

const Speaking = () => {
    return (
        <div className="speaking-page">
            <div className="container speaking-container">
                {/* Hero / Title Section */}
                <header className="speaking-hero">
                    <span className="editorial-eyebrow">Thought Leadership & Speaking</span>
                    <h1 className="page-title text-center">Speaking & Workshops</h1>
                    <div className="speaking-intro">
                        <p className="editorial-lead">
                            Dr. Elizabeth Mateer speaks at the intersection of psychology, neurocognition, identity, creativity, and human performance — translating complex ideas into intellectually rigorous, emotionally resonant, and practically useful conversations.
                        </p>
                        <p className="editorial-body">
                            Her work explores how people think, build, adapt, create, and construct meaning during periods of ambition, uncertainty, reinvention, and rapid technological change.
                        </p>
                        <p className="speaking-audiences-subtle">
                            Recent talks include founder communities, academic institutions, literary organizations, healthcare professionals, and interdisciplinary audiences.
                        </p>
                    </div>
                </header>

                <hr className="editorial-divider" />

                {/* Featured Talks Section */}
                <section className="featured-talks-section">
                    <div className="section-header-block">
                        <h2 className="section-heading text-center">Featured Talks</h2>
                        <p className="section-subtitle text-center">Selected conversations, workshops, and invited talks.</p>
                    </div>

                    <div className="signature-talk-card">
                        <div className="talk-image-wrapper">
                            <img src={FoundersMindImg} alt="The Founder's Mind Signature Talk" className="talk-featured-image" />
                        </div>
                        
                        <div className="talk-details">
                            <span className="talk-badge">Signature Talk</span>
                            <h3 className="talk-title signature-focus">The Founder’s Mind</h3>
                            <h4 className="talk-subtitle">Founder Psychology, Cognitive Performance & the Mental Demands of Building</h4>
                            
                            <p className="talk-description">
                                A research-informed conversation exploring the psychology of entrepreneurship, cognitive flexibility, identity, burnout, decision-making, attention, uncertainty tolerance, and the hidden mental demands of building ambitious things.
                            </p>
                            
                            <div className="talk-context-line">
                                <span className="context-bullet"></span>
                                <p>Recently presented at Boston Tech Week</p>
                            </div>
                            
                            <div className="talk-ctas">
                                <Button 
                                    to="/founders-mind" 
                                    variant="primary" 
                                    className="btn-talk-primary"
                                >
                                    View Talk Resources <ArrowRight size={15} style={{ marginLeft: '6px' }} />
                                </Button>
                                <Button 
                                    to="/contact" 
                                    variant="outline" 
                                    className="btn-talk-secondary"
                                >
                                    Request Speaking Inquiry →
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Curated Event Photos: "Recent Conversations" Section */}
                <section className="in-conversation-section">
                    <div className="section-header-block">
                        <h2 className="section-heading text-center">Recent Conversations</h2>
                        <p className="section-subtitle text-center">Selected moments from workshops, talks, founder gatherings, and public conversations.</p>
                    </div>

                    <div className="curated-photo-grid">
                        <div className="grid-item item-large">
                            <div className="grid-image-frame">
                                <img src={FoundersMind1} alt="Boston Tech Week · Founder Breakfast" />
                            </div>
                            <span className="grid-caption">Boston Tech Week · Founder Breakfast</span>
                        </div>
                        <div className="grid-item item-medium">
                            <div className="grid-image-frame">
                                <img src={FoundersMind2} alt="Founder conversations on identity, cognition, and entrepreneurship" />
                            </div>
                            <span className="grid-caption">Founder conversations on identity, cognition, and entrepreneurship</span>
                        </div>
                        <div className="grid-item item-medium-alt">
                            <div className="grid-image-frame">
                                <img src={FoundersMind4} alt="Speaking on attention, decision-making, and founder psychology" />
                            </div>
                            <span className="grid-caption">Speaking on attention, decision-making, and founder psychology</span>
                        </div>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Conversations & Media Section */}
                <section className="speaking-section media-section">
                    <div className="section-header-block">
                        <h2 className="section-heading text-center">Conversations & Media</h2>
                        <p className="section-subtitle text-center">Interviews, guest conversations, and media exploring identity, creativity, neurocognition, and human potential.</p>
                    </div>
                    
                    <div className="media-feature-card">
                        <div className="media-thumbnail">
                            <img src={NeuroImg} alt="The Neuroplasticity of Identity" />
                        </div>
                        <div className="media-content">
                            <span className="media-label">Mind Tricks Radio</span>
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

                {/* Areas of Conversation Section */}
                <section className="speaking-section conversation-themes-section">
                    <div className="section-header-block">
                        <h2 className="section-heading text-center">Areas of Conversation</h2>
                        <p className="section-subtitle text-center">Examples of themes explored across talks, workshops, and invited conversations.</p>
                    </div>

                    <div className="themes-grid">
                        <div className="theme-card">
                            <span className="theme-number">01</span>
                            <h3 className="theme-title">The Founder’s Mind</h3>
                            <p className="theme-text">
                                A research-informed inquiry into the unique cognitive and emotional demands of entrepreneurship, self-narrative under pressure, and mental longevity.
                            </p>
                        </div>
                        <div className="theme-card">
                            <span className="theme-number">02</span>
                            <h3 className="theme-title">Identity & Self-Authorship</h3>
                            <p className="theme-text">
                                Navigating the complex psychology of transition, reinvention, and personal agency in periods of professional or technological change.
                            </p>
                        </div>
                        <div className="theme-card">
                            <span className="theme-number">03</span>
                            <h3 className="theme-title">The Neuropsychology of Creativity</h3>
                            <p className="theme-text">
                                Exploring how memory, attention, identity, and cognitive flexibility coalesce to shape breakthrough ideas and personal meaning.
                            </p>
                        </div>
                        <div className="theme-card">
                            <span className="theme-number">04</span>
                            <h3 className="theme-title">Cognitive Flexibility & Reinvention</h3>
                            <p className="theme-text">
                                Understanding how the brain adapts to rapid shifts and how to build deep psychological resilience and cognitive agility.
                            </p>
                        </div>
                        <div className="theme-card">
                            <span className="theme-number">05</span>
                            <h3 className="theme-title">Attention, Performance & Mental Load</h3>
                            <p className="theme-text">
                                Managing cognitive bandwidth, cultivating deep focus, and supporting the nervous system in high-stakes, hyper-stimulated environments.
                            </p>
                        </div>
                        <div className="theme-card">
                            <span className="theme-number">06</span>
                            <h3 className="theme-title">AI, Cognition & Human Meaning</h3>
                            <p className="theme-text">
                                Exploring what artificial intelligence reveals about cognition, creativity, identity, and what it means to think.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Ways We Can Work Together Section */}
                <section className="speaking-section work-together-section">
                    <div className="section-header-block">
                        <h2 className="section-heading text-center">Ways We Can Work Together</h2>
                        <p className="section-subtitle text-center">Engagements are structured intentionally to suit the context and objectives of the audience.</p>
                    </div>
                    
                    <div className="work-together-grid">
                        <div className="work-item">
                            <h3 className="work-item-title">Founder Talks & Team Sessions</h3>
                            <p className="work-item-text">
                                Research-informed conversations for founders, startups, accelerators, and innovation communities.
                            </p>
                        </div>
                        <div className="work-item">
                            <h3 className="work-item-title">University & Academic Lectures</h3>
                            <p className="work-item-text">
                                Guest lectures and interdisciplinary conversations on psychology, cognition, creativity, and identity.
                            </p>
                        </div>
                        <div className="work-item">
                            <h3 className="work-item-title">Workshops & Deep Dives</h3>
                            <p className="work-item-text">
                                Interactive sessions tailored to audience challenges and organizational context.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Invite Elizabeth to Speak CTA Section */}
                <section className="invite-speaking-section">
                    <div className="invite-speaking-card">
                        <span className="invite-eyebrow">Engagement Inquiry</span>
                        <h2 className="invite-title">Invite Elizabeth to Speak</h2>
                        <p className="invite-lead">
                            Elizabeth speaks with select organizations, founder communities, universities, literary institutions, healthcare teams, and interdisciplinary groups.
                        </p>
                        <p className="invite-body">
                            Topics are often customized to specific audience needs while remaining deeply grounded in psychological science, neurocognition, identity, creativity, and human performance.
                        </p>
                        
                        <div className="invite-cta-wrapper">
                            <Button to="/contact" variant="primary" className="cta-btn-premium">
                                Inquire About Speaking →
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Speaking;
