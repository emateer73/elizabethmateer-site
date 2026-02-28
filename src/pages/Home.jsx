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
                    <h2 className="hero-subtitle">Neuropsychology Fellow | Writer | Founder</h2>
                    <p className="hero-primary">
                        Where Attention Goes
                    </p>
                    <p className="hero-primary-subtext">
                        Monthly essays on creativity, identity, and <em>meaning-making</em>.
                    </p>
                    <div className="hero-cta">
                        <Button href="https://elizabethmateer.substack.com/" target="_blank" variant="primary" className="btn-large btn-cta-primary">
                            ENTER WHERE ATTENTION GOES
                        </Button>
                        <a href="https://www.psychologytoday.com/us/blog/the-architecture-of-identity" target="_blank" rel="noopener noreferrer" className="hero-secondary-link">
                            Read The Architecture of Identity (Psychology Today)
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

            {/* At a Glance Section */}
            <section className="at-a-glance-section">
                <div className="container">
                    <span className="at-a-glance-label">At a Glance</span>
                    <ul className="at-a-glance-list">
                        <li>Clinical Fellow in Psychology at <strong>Harvard Medical School</strong></li>
                        <li>Author of Searching for Home (2024)</li>
                        <li>Strategic advisor at the intersection of psychology, identity, and systems design</li>
                        <li>Contributor, Psychology Today</li>
                        <li>Speaker on identity, memory, and creativity</li>
                    </ul>
                </div>
            </section>

            {/* Innovation Section */}
            <section className="innovation-section">
                <div className="container innovation-container">
                    <span className="innovation-label">INNOVATION</span>
                    <h2 className="innovation-heading">PsychDraft</h2>
                    <p className="innovation-body">
                        PsychDraft is an AI-assisted cognitive workflow platform reimagining neuropsychological documentation through systems design, privacy-conscious infrastructure, and clinical precision.
                    </p>
                    <div className="innovation-cta">
                        <Button href="https://www.psychdraft.com" target="_blank" variant="text" className="btn-explore-clean">
                            Explore PsychDraft <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Start Here Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="start-here-grid">
                        <div className="card">
                            <Brain size={32} className="card-icon" />
                            <h3>Psychology Today</h3>
                            <p>Read the latest articles on neuropsychology and creativity.</p>
                            <Button href="#" variant="text">Read on Psychology Today <ArrowRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </div>
                        <div className="card">
                            <BookOpen size={32} className="card-icon" />
                            <h3>Books</h3>
                            <p>Poetry and prose exploring identity, loss, reinvention, and growth.</p>
                            <Button to="/books" variant="text">Explore the books <ArrowRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </div>
                        <div className="card">
                            <Mic size={32} className="card-icon" />
                            <h3>Speaking</h3>
                            <p>Keynotes and talks on neuropsychology, creativity, identity, and performance.</p>
                            <Button to="/speaking" variant="text">Invite Dr. Mateer <ArrowRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </div>
                        <div className="card">
                            <Compass size={32} className="card-icon" />
                            <h3>Consulting</h3>
                            <p>Strategic psychological advisory for publishers, founders, and research teams working at the intersection of cognition and culture.</p>
                            <Button to="/consulting" variant="text">Explore Consulting <ArrowRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </div>
                    </div>
                </div>
            </section>



            {/* Areas of Focus */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Areas of Focus</h2>
                    <div className="focus-grid">
                        <div className="focus-item">
                            <Zap className="focus-icon" />
                            <p>Attention and cognitive functioning</p>
                        </div>
                        <div className="focus-item">
                            <User className="focus-icon" />
                            <p>Identity, meaning-making, and self-authorship</p>
                        </div>
                        <div className="focus-item">
                            <PenTool className="focus-icon" />
                            <p>The neuropsychology of creativity</p>
                        </div>
                        <div className="focus-item">
                            <Globe className="focus-icon" />
                            <p>Culture, behavior, and modern life</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work with Dr. Mateer */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Work with Dr. Mateer</h2>
                    <div className="work-grid">
                        <div className="work-column">
                            <h3>Writing</h3>
                            <p>Essays, articles, and commentary on neuropsychology and culture.</p>
                            <Button to="/contact" variant="text">Contact for Writing</Button>
                        </div>
                        <div className="work-column">
                            <h3>Speaking</h3>
                            <p>Keynotes and workshops for universities, corporate wellness, and creative communities.</p>
                            <Button to="/contact" variant="text">Contact for Speaking</Button>
                        </div>
                        <div className="work-column">
                            <h3>Collaborations</h3>
                            <p>Interdisciplinary projects bridging science, art, and human potential.</p>
                            <Button to="/contact" variant="text">Contact for Collabs</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
