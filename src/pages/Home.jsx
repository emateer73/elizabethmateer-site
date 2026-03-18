import React from 'react';
import Button from '../components/Button';
import { ArrowRight, BookOpen, Mic, PenTool, Brain, User, Zap, Globe, Compass } from 'lucide-react';
import './Home.css';
import PsychTodayLogo from '../assets/psychology today.png';
import NRTimesLogo from '../assets/nr times new logo.png';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container text-left">
                    <h1 className="hero-title">Elizabeth Mateer, Ph.D.</h1>
                    <p className="hero-primary">
                        Where Attention Goes
                    </p>
                    <p className="hero-primary-subtext">
                        Essays on attention, identity, and the architecture of meaning.
                    </p>
                    <div className="hero-cta">
                        <Button href="https://elizabethmateer.substack.com/" target="_blank" variant="primary" className="btn-large btn-cta-primary">
                            ENTER WHERE ATTENTION GOES
                        </Button>
                        <a href="https://www.psychologytoday.com/us/blog/the-architecture-of-identity" target="_blank" rel="noopener noreferrer" className="hero-sub-link">
                            Latest: The Architecture of Identity (Psychology Today) →
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured In Section */}
            <section className="featured-in-section">
                <div className="container">
                    <span className="featured-in-label">Featured In</span>
                    <div className="featured-logos">
                        <img src={NRTimesLogo} alt="NR Times" className="logo-nr-times" />
                        <img src={PsychTodayLogo} alt="Psychology Today" />
                    </div>
                </div>
            </section>

            {/* Identity Block */}
            <section className="identity-section section">
                <div className="container text-center">
                    <h2 className="identity-heading">Elizabeth Mateer, Ph.D.</h2>
                    <ul className="identity-list">
                        <li>– Clinical Fellow in Psychology at Harvard Medical School</li>
                        <li>– Founder, PsychDraft</li>
                        <li>– Founder & Literary Curator, Searching for Home Collective</li>
                    </ul>
                </div>
            </section>

            {/* Work Section */}
            <section className="work-section section bg-light">
                <div className="container">
                    <h2 className="section-label text-center" style={{marginBottom: "3rem"}}>Selected Work</h2>
                    <div className="work-cards-grid">
                        <div className="work-card">
                            <h3>Writing</h3>
                            <p>Essays on attention, identity, and creativity. Including Psychology Today.</p>
                            <Button to="/writing" variant="text" className="work-cta">Read Writing →</Button>
                        </div>
                        <div className="work-card">
                            <h3>Speaking</h3>
                            <p>Talks on neuropsychology, identity, and performance.</p>
                            <Button to="/speaking" variant="text" className="work-cta">Invite to Speak →</Button>
                        </div>
                        <div className="work-card">
                            <h3>Consulting</h3>
                            <p>Strategic advisory at the intersection of psychology and culture.</p>
                            <Button to="/consulting" variant="text" className="work-cta">Explore Consulting →</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Venture Section */}
            <section className="venture-section section">
                <div className="container venture-container">
                    <span className="venture-label">Venture</span>
                    <h2 className="venture-heading">PsychDraft</h2>
                    <p className="venture-body">
                        PsychDraft is an AI-assisted platform reimagining neuropsychological documentation through systems design and clinical precision.
                    </p>
                    <div className="venture-cta">
                        <Button href="https://www.psychdraft.com" target="_blank" variant="text" className="btn-venture-link">
                            Explore PsychDraft →
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
