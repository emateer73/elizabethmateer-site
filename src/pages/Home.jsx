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
                <div className="container hero-container">
                    <h1 className="hero-title">Elizabeth Mateer, Ph.D.</h1>
                    <h2 className="hero-subtitle">Neuropsychology Fellow | Researcher | Writer</h2>
                    <p className="hero-primary">
                        Understanding how the brain shapes identity, creativity, and human potential.
                    </p>
                    <div className="hero-cta">
                        <Button href="https://elizabethmateer.substack.com/?utm_campaign=pub&utm_medium=web" target="_blank" variant="primary" className="btn-large">Subscribe to the Letter</Button>
                        <p className="hero-cta-subtext">Monthly reflections on identity, creativity, and the architecture of becoming.</p>
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
                <div className="container">
                    <span className="at-a-glance-label">Innovation</span>
                    <p className="innovation-text">
                        Founder of <a href="https://www.psychdraft.com" target="_blank" rel="noopener noreferrer" className="innovation-link">PsychDraft</a>, an AI-assisted platform reimagining neuropsychological documentation through systems design and cognitive workflow.
                    </p>
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

            {/* Featured Section */}
            <section className="section featured-section">
                <div className="container">
                    <div className="featured-wrapper">
                        <span className="featured-label">Featured</span>
                        <div className="featured-content">
                            <h2 className="featured-title">The Architecture of Identity</h2>
                            <h3 className="featured-subtitle">Where neuropsychology meets creativity and growth</h3>
                            <p className="featured-desc">Psychology Today blog: The Architecture of Identity</p>
                            <Button href="https://www.psychologytoday.com/us/blog/the-architecture-of-identity" target="_blank" variant="outline">Visit</Button>
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
