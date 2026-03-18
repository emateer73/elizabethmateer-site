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
                <div className="container hero-container text-center">
                    <h1 className="hero-title">Elizabeth Mateer, Ph.D.</h1>
                    <p className="hero-subtitle">
                        Clinical Neuropsychology Fellow | Writer | Founder
                    </p>
                    <div className="hero-cta-group">
                        <Button to="/writing" variant="primary" className="btn-large btn-cta-primary">
                            Read Writing
                        </Button>
                        <Button to="/contact" variant="outline" className="btn-large btn-cta-outline">
                            Work With Me
                        </Button>
                    </div>
                    <p className="hero-credentials">
                        Clinical Fellow in Psychology at Harvard Medical School · Founder, PsychDraft · Founder & Literary Curator, Searching for Home Collective
                    </p>
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

            {/* Writing Section */}
            <section className="writing-preview-section section">
                <div className="container text-center">
                    <h2 className="section-label" style={{marginBottom: "2rem"}}>Writing</h2>
                    <p className="writing-preview-body">
                        Essays and commentary on identity, attention, and meaning across platforms.
                    </p>
                    <div className="writing-preview-links">
                        <a href="https://elizabethmateer.substack.com/" target="_blank" rel="noopener noreferrer" className="writing-preview-link">
                            Where Attention Goes →
                        </a>
                        <a href="https://www.psychologytoday.com/us/blog/the-architecture-of-identity" target="_blank" rel="noopener noreferrer" className="writing-preview-link">
                            Psychology Today →
                        </a>
                        <Button to="/writing" variant="text" className="writing-preview-link-btn">
                            Read all writing →
                        </Button>
                    </div>
                </div>
            </section>

            {/* Work Section */}
            <section className="work-section section bg-light">
                <div className="container">
                    <h2 className="section-label text-center" style={{marginBottom: "3rem"}}>Work</h2>
                    <div className="work-cards-grid">
                        <div className="work-card">
                            <h3>Speaking</h3>
                            <p>Talks on neuropsychology, identity, creativity, and performance.</p>
                            <Button to="/speaking" variant="text" className="work-cta">Invite to Speak →</Button>
                        </div>
                        <div className="work-card">
                            <h3>Consulting</h3>
                            <p>Strategic advisory at the intersection of psychology, culture, and systems thinking.</p>
                            <Button to="/consulting" variant="text" className="work-cta">Explore Consulting →</Button>
                        </div>
                        <div className="work-card">
                            <h3>Searching for Home Collective</h3>
                            <p>Literary programming, salon culture, and creative community.</p>
                            <Button href="https://www.searchingforhomecollective.com/" target="_blank" variant="text" className="work-cta">Explore the Collective →</Button>
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
                        An AI-assisted platform reimagining neuropsychological documentation through systems design and clinical precision.
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
