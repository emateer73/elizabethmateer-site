import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './Home.css';
import PortraitImage from '../assets/profile6.png';

const Home = () => {
    useDocumentTitle('Elizabeth Mateer, Ph.D. | Neuropsychology Fellow & Poet');

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                {/* Full-bleed portrait background */}
                <div className="hero-background-portrait" style={{ backgroundImage: `url(${PortraitImage})` }}></div>
                {/* Seamless atmospheric gradient for text readability and cinematic depth */}
                <div className="hero-background-gradient"></div>

                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title animate-text">
                            Elizabeth Mateer, Ph.D.
                        </h1>
                        <p className="hero-subtitle animate-text delay-1">
                            Neuropsychology Fellow &amp; Poet
                        </p>
                        <p className="hero-primary-subtext animate-text delay-2">
                            I study how the brain builds a self, and I write about what that feels like.
                        </p>
                        <Link to="/speaking" className="hero-eyebrow-tag animate-text delay-3">
                            SPEAKING AT SXSW 2027 · AUSTIN, MARCH
                        </Link>
                        <div className="hero-cta-group animate-text delay-3">
                            <Button to="/writing" variant="primary" className="btn-large btn-cta-primary">
                                Read the Writing
                            </Button>
                            <Button to="/speaking" variant="outline" className="btn-large btn-cta-outline">
                                Invite Me to Speak
                            </Button>
                        </div>
                        <p className="hero-credentials animate-text delay-4">
                            Clinical Fellow in Psychology at Harvard Medical School · Founder, PsychDraft · Founder &amp; Literary Curator, Searching for Home Collective
                        </p>
                    </div>
                </div>
            </section>

            {/* Through-line statement, says the connection out loud */}
            <section className="throughline-section">
                <div className="container">
                    <p className="throughline-statement">
                        I work one question from several directions: how people build, lose, and rebuild a sense of self. The neuropsychology is how I study it, the poetry is how I live it, the talks are how I teach it.
                    </p>
                </div>
            </section>

            {/* Proof bar */}
            <section className="featured-in-section">
                <div className="container proof-bar">
                    <div className="proof-row">
                        <span className="featured-in-label">Featured In</span>
                        <p className="proof-names">Psychology Today · Applied Neuropsychology: Adult</p>
                    </div>
                    <div className="proof-row">
                        <span className="featured-in-label">Spoken At</span>
                        <p className="proof-names">SXSW 2027 · MIT Sloan Fellows MBA · Boston Tech Week</p>
                    </div>
                </div>
            </section>

            {/* Three facets, one subject, several instruments */}
            <section className="facets-section section">
                <div className="container">
                    <div className="work-cards-grid">
                        <div className="work-card">
                            <h3>Writing</h3>
                            <p>Essays and a Psychology Today column on identity, attention, and becoming.</p>
                            <Button to="/writing" variant="text" className="work-cta">Read the writing →</Button>
                        </div>
                        <div className="work-card">
                            <h3>Speaking</h3>
                            <p>Talks that turn the research into something a room can use, most recently MIT Sloan, Boston Tech Week, and SXSW 2027.</p>
                            <Button to="/speaking" variant="text" className="work-cta">See speaking →</Button>
                        </div>
                        <div className="work-card">
                            <h3>Poetry</h3>
                            <p>Two collections about belonging and the long work of becoming yourself.</p>
                            <Button to="/poetry" variant="text" className="work-cta">Read the poetry →</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/*
              A TASTE OF THE WORK, waiting on Elizabeth's chosen lines.
              Drop 4–6 lines of poetry here as a <section className="taste-section"> so a
              visitor actually reads her on the homepage. Left out until she picks the lines.
            */}

            {/* Ventures & community */}
            <section className="ventures-strip section">
                <div className="container ventures-container">
                    <p className="venture-line">
                        <strong>PsychDraft</strong>, the platform I founded to give clinicians their time back, so they can spend it being present with the people in front of them.{' '}
                        <a href="https://www.psychdraft.com" target="_blank" rel="noopener noreferrer">Explore PsychDraft →</a>
                    </p>
                    <p className="venture-line">
                        <strong>Searching for Home Collective</strong>, the literary salon I founded and curate in Boston.{' '}
                        <a href="https://www.searchingforhomecollective.com/" target="_blank" rel="noopener noreferrer">Explore the Collective →</a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
