import React from 'react';
import Button from '../components/Button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import FoundersMindImg from "../assets/founder's mind event.png";
import NeuroImg from "../assets/neuro.jpg";
import FoundersMind1 from "../assets/foundersmind1.jpg";
import FoundersMind2 from "../assets/foundersmind2.jpg";
import FoundersMind4 from "../assets/foundersmind4.jpg";
import FFRImg from "../assets/FFR.png";
import MIT1 from "../assets/MIT1.jpg";
import MIT2 from "../assets/MIT2.jpg";
import MIT3 from "../assets/MIT3.jpg";
import TheLastShowImg from "../assets/the last show.png";
import SxswImg from "../assets/sxsw panel picker.png";
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
                            Dr. Elizabeth Mateer speaks at the intersection of psychology, neurocognition, founder performance, identity, creativity, and human potential — translating complex ideas into intellectually rigorous, emotionally resonant, and practically useful conversations.
                        </p>
                        <p className="editorial-body">
                            Her work explores how people think, build, adapt, create, and construct meaning during periods of ambition, uncertainty, reinvention, and rapid technological change. Recent conversations have explored founder psychology, decision-making under uncertainty, identity shifts, cognitive flexibility, creativity, burnout, and sustainable performance.
                        </p>
                        <p className="speaking-audiences-subtle">
                            Recent invited conversations include the MIT Sloan Fellows MBA, Boston Tech Week, founder communities, academic institutions, healthcare organizations, and interdisciplinary audiences.
                        </p>
                    </div>
                </header>

                {/* TEMPORARY SECTION: Remove or review after August 23, 2026 */}
                <section className="sxsw-proposal-section">
                    <div className="sxsw-proposal-card">
                        <div className="sxsw-image-wrapper">
                            <img src={SxswImg} alt="SXSW PanelPicker proposal for Diagnose, Don’t Discipline: Productivity for Smart People" className="sxsw-featured-image" />
                        </div>
                        <div className="sxsw-details">
                            <span className="sxsw-badge">Community Voting Open</span>
                            <span className="sxsw-eyebrow">SXSW 2027 PANELPICKER</span>
                            <h2 className="sxsw-title">Diagnose, Don’t Discipline: Productivity for Smart People</h2>
                            <p className="sxsw-description">
                                Most productivity advice assumes every brain works the same way. It doesn’t.
                            </p>
                            <p className="sxsw-description">
                                My proposed SXSW 2027 session reframes productivity as a diagnostic process: understanding your own patterns of attention, energy, motivation, and emotional regulation—then building systems that work with your brain instead of forcing it into someone else’s routine.
                            </p>
                            <p className="sxsw-description sxsw-voting-open">
                                Community voting is now open through August 23, 2026.
                            </p>
                            <div className="sxsw-ctas">
                                <Button 
                                    href="https://participate.sxsw.com/flow/sxsw/sxsw27/community-voting-sxsw/page/community-voting/session/1784918802592001QKsy" 
                                    variant="primary" 
                                    className="btn-talk-primary"
                                >
                                    Vote for the Session
                                </Button>
                                <Button 
                                    variant="outline" 
                                    className="btn-talk-secondary"
                                    onClick={() => {
                                        const section = document.getElementById('recent-engagements');
                                        if (section) section.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    View My Speaking Work
                                </Button>
                            </div>
                            <p className="sxsw-voting-deadline">Voting closes August 23 at 11:59 PM PT.</p>
                        </div>
                    </div>
                </section>
                {/* END TEMPORARY SECTION */}

                {/* Featured Talks Section */}
                <section id="recent-engagements" className="featured-talks-section">
                    <div className="section-header-block">
                        <h2 className="section-heading text-center">Recent Engagements</h2>
                        <p className="section-subtitle text-center">Selected conversations, workshops, and invited talks.</p>
                    </div>

                    <div className="featured-talks-grid" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                    <div className="signature-talk-card">
                        <div className="talk-image-wrapper">
                            <img src={FFRImg} alt="Build With Your Brain workshop for Female Founders Rise" className="talk-featured-image" />
                        </div>
                        
                        <div className="talk-details">
                            <span className="talk-badge">RECENT WORKSHOP</span>
                            <h3 className="talk-title signature-focus">Build With Your Brain</h3>
                            <h4 className="talk-subtitle">The Neuropsychology of Sustainable Entrepreneurship</h4>
                            
                            <div className="talk-context-line">
                                <span className="context-bullet"></span>
                                <p>Presented for Female Founders Rise Summer School for Founders.</p>
                            </div>

                            <p className="talk-description">
                                A practical, research-informed workshop exploring why productivity problems are often assessment problems. The session examined how founders can better understand their patterns of attention, energy, motivation, decision-making, and stress—and build systems that work with their cognitive strengths rather than against them.
                            </p>
                            
                            <div className="upcoming-takeaways" style={{ marginBottom: '1.5rem' }}>
                                <h4>Key Themes</h4>
                                <ul>
                                    <li>Identifying the conditions under which you do your best work</li>
                                    <li>Designing a week around attention and energy</li>
                                    <li>Diagnosing friction before defaulting to more discipline</li>
                                    <li>Managing imposter syndrome and separating self-worth from company performance</li>
                                    <li>Using delegation and support as strategic resource allocation</li>
                                </ul>
                            </div>

                            <p className="talk-results-line" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', opacity: 0.85 }}>
                                141 founders registered for the live session, which received an NPS of 78.
                            </p>
                            
                            <div className="talk-ctas">
                                <Button 
                                    to="/build-with-your-brain" 
                                    variant="primary" 
                                    className="btn-talk-primary"
                                    aria-label="View resources for the Build With Your Brain workshop"
                                    onClick={() => {
                                        if (typeof window !== 'undefined') {
                                            if (window.plausible) window.plausible('build_with_your_brain_resources_clicked');
                                            else if (window.fathom) window.fathom.trackEvent('build_with_your_brain_resources_clicked');
                                            else console.log('Analytics event:', 'build_with_your_brain_resources_clicked');
                                        }
                                    }}
                                >
                                    VIEW THE TALK RESOURCES
                                </Button>
                                <Button 
                                    to="/contact" 
                                    variant="outline" 
                                    className="btn-talk-secondary"
                                >
                                    INQUIRE ABOUT THIS WORKSHOP
                                </Button>
                            </div>
                        </div>
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
                                <p>Recently invited by Boston Tech Week & MIT Sloan Fellows MBA</p>
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
                    </div>
                </section>

                {/* Recent Audiences Credibility Strip */}
                <section className="recent-audiences-section">
                    <div className="recent-audiences-container">
                        <h4 className="recent-audiences-title">Recent Audiences</h4>
                        <p className="recent-audiences-list">
                            MIT Sloan Fellows MBA &bull; Boston Tech Week &bull; Founder Communities &bull; Healthcare Organizations &bull; Academic Institutions
                        </p>
                    </div>
                </section>

                <hr className="editorial-divider" />

                {/* Curated Event Photos: "Recent Conversations" Section */}
                <section className="in-conversation-section">
                    <div className="section-header-block">
                        <h2 className="section-heading text-center">In the Room</h2>
                        <p className="section-subtitle text-center">Selected moments from workshops, talks, founder gatherings, and public conversations.</p>
                    </div>

                    <div className="curated-photo-grid">
                        <div className="photo-grid-group">
                            <div className="grid-item item-large">
                                <div className="grid-image-frame">
                                    <img src={FoundersMind1} alt="Boston Tech Week · Founder Breakfast" />
                                </div>
                                <span className="grid-caption">Boston Tech Week · Founder Breakfast</span>
                            </div>
                            <div className="grid-item item-medium">
                                <div className="grid-image-frame">
                                    <img src={FoundersMind2} alt="Boston Tech Week" />
                                </div>
                                <span className="grid-caption">Boston Tech Week</span>
                            </div>
                            <div className="grid-item item-medium-alt">
                                <div className="grid-image-frame">
                                    <img src={FoundersMind4} alt="Boston Tech Week" />
                                </div>
                                <span className="grid-caption">Boston Tech Week</span>
                            </div>
                        </div>

                        <div className="photo-grid-group">
                            <div className="grid-item item-large">
                                <div className="grid-image-frame">
                                    <img src={MIT1} alt="MIT Sloan Fellows MBA · Presentation" />
                                </div>
                                <span className="grid-caption">MIT Sloan Fellows MBA · Presentation</span>
                            </div>
                            <div className="grid-item item-medium">
                                <div className="grid-image-frame">
                                    <img src={MIT2} alt="MIT Sloan Fellows MBA" />
                                </div>
                                <span className="grid-caption">MIT Sloan Fellows MBA</span>
                            </div>
                            <div className="grid-item item-medium-alt">
                                <div className="grid-image-frame">
                                    <img src={MIT3} alt="MIT Sloan Fellows MBA" />
                                </div>
                                <span className="grid-caption">MIT Sloan Fellows MBA</span>
                            </div>
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
                    
                    <div className="media-cards-grid" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                    <div className="media-feature-card">
                        <div className="media-thumbnail">
                            <img src={TheLastShowImg} alt="Elizabeth Mateer discussing travel and identity on The Last Show with David Cooper" />
                        </div>
                        <div className="media-content">
                            <span className="media-label">The Last Show with David Cooper</span>
                            <h3 className="media-entry-title">How Travel Breaks Your Identity</h3>
                            <p className="media-description">
                                A conversation about why travel can disrupt our familiar sense of self, what happens when we step outside the environments and roles that usually define us, and how unfamiliar experiences can create space for identity, perspective, and personal growth to shift.
                            </p>
                            <div className="media-cta">
                                <Button 
                                    href="https://open.spotify.com/episode/60hTy4ytI5iNsyXLMr8Pyh?si=1y7LESbaRkyu-tQe5Zj7tA" 
                                    variant="outline" 
                                    className="btn-listen"
                                    aria-label="Listen to the episode on Spotify"
                                >
                                    Listen on Spotify <ExternalLink size={14} style={{ marginLeft: '6px', opacity: 0.6 }} />
                                </Button>
                            </div>
                        </div>
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
                                >
                                    Listen to the Episode <ExternalLink size={14} style={{ marginLeft: '6px', opacity: 0.6 }} />
                                </Button>
                            </div>
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
