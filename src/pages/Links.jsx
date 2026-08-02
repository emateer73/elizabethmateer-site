import React from 'react';
import './Links.css';
import { ArrowRight } from 'lucide-react';

const Links = () => {
    // 💡 Update these variables when you have a new article or event
    const latestPTArticle = {
        title: "Read My Latest Psychology Today Article",
        url: "https://www.psychologytoday.com/us/contributors/elizabeth-mateer" // Replace with actual article URL
    };

    return (
        <div className="links-page">
            <div className="links-container">
                <header className="links-header">
                    <h1 className="links-name">Elizabeth Mateer, Ph.D.</h1>
                    <h2 className="links-title">Neuropsychology Fellow &middot; Founder &middot; Writer</h2>
                </header>
                


                <div className="links-section">
                    <h3 className="links-section-label">Explore</h3>
                    
                    <div className="work-items-group">
                        <div className="work-item">
                            <h4 className="work-item-title">A New Type of Breakfast</h4>
                            <p className="work-item-subtext">My newest poetry collection</p>
                            <a href="https://www.finishinglinepress.com/product/a-new-type-of-breakfast-by-elizabeth-mateer/" target="_blank" rel="noopener noreferrer" className="work-item-cta">
                                Get the Book <ArrowRight size={14} className="inline-arrow" />
                            </a>
                        </div>

                        <div className="work-item">
                            <h4 className="work-item-title">PsychDraft</h4>
                            <p className="work-item-subtext">Using technology to stay human</p>
                            <a href="https://psychdraft.com/" target="_blank" rel="noopener noreferrer" className="work-item-cta">
                                Explore PsychDraft <ArrowRight size={14} className="inline-arrow" />
                            </a>
                        </div>

                        <div className="work-item">
                            <h4 className="work-item-title">{latestPTArticle.title}</h4>
                            <p className="work-item-subtext">Essays on identity, attention, creativity, and becoming</p>
                            <a href={latestPTArticle.url} target="_blank" rel="noopener noreferrer" className="work-item-cta">
                                Read the Article <ArrowRight size={14} className="inline-arrow" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="links-section">
                    <h3 className="links-section-label">Ideas</h3>
                    
                    <div className="work-items-group">
                        <div className="work-item">
                            <h4 className="work-item-title">Where Attention Goes</h4>
                            <p className="work-item-subtext">Essays on identity, attention, creativity, and becoming</p>
                            <a href="https://elizabethmateer.substack.com/" target="_blank" rel="noopener noreferrer" className="work-item-cta">
                                Read the Essays <ArrowRight size={14} className="inline-arrow" />
                            </a>
                        </div>

                        <div className="work-item">
                            <h4 className="work-item-title">The Architecture of Identity</h4>
                            <p className="work-item-subtext">My Psychology Today column on how attention, memory, creativity, and experience shape who we become</p>
                            <a href="https://www.psychologytoday.com/us/blog/the-architecture-of-identity" target="_blank" rel="noopener noreferrer" className="work-item-cta">
                                Explore the Column <ArrowRight size={14} className="inline-arrow" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="links-section">
                    <h3 className="links-section-label">Speaking</h3>
                    
                    <div className="work-items-group">
                        <div className="work-item">
                            <h4 className="work-item-title">Speaking and Workshops</h4>
                            <p className="work-item-subtext">Talks on attention, productivity, identity, creativity, and building with your brain</p>
                            <a href="/speaking" className="work-item-cta">
                                Explore Speaking <ArrowRight size={14} className="inline-arrow" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="links-section">
                    <h3 className="links-section-label">Creative Work</h3>
                    
                    <div className="work-items-group">
                        <div className="work-item">
                            <h4 className="work-item-title">A New Type of Breakfast</h4>
                            <p className="work-item-subtext">A poetry collection about intimacy, identity, and becoming</p>
                            <a href="https://www.finishinglinepress.com/product/a-new-type-of-breakfast-by-elizabeth-mateer/" target="_blank" rel="noopener noreferrer" className="work-item-cta">
                                Get the Book <ArrowRight size={14} className="inline-arrow" />
                            </a>
                        </div>

                        <div className="work-item">
                            <h4 className="work-item-title">Searching for Home Collective</h4>
                            <p className="work-item-subtext">A literary salon and creative community</p>
                            <a href="https://www.searchingforhomecollective.com/" target="_blank" rel="noopener noreferrer" className="work-item-cta">
                                Explore the Collective <ArrowRight size={14} className="inline-arrow" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="links-section">
                    <h3 className="links-section-label">Follow Along</h3>
                    
                    <div className="work-items-group social-items-group">
                        <a href="https://www.tiktok.com/@elizabeth_mateer" target="_blank" rel="noopener noreferrer" className="social-card">
                            <span className="social-card-title">TikTok</span>
                            <span className="social-card-subtext">Psychology, identity, creativity, and building</span>
                        </a>

                        <a href="https://www.instagram.com/elizabeth_mateer/" target="_blank" rel="noopener noreferrer" className="social-card">
                            <span className="social-card-title">Instagram</span>
                            <span className="social-card-subtext">Writing, creative work, and life behind the ideas</span>
                        </a>

                        <a href="https://www.linkedin.com/in/elizabeth-mateer-phd-39b8a5192/" target="_blank" rel="noopener noreferrer" className="social-card">
                            <span className="social-card-title">LinkedIn</span>
                            <span className="social-card-subtext">Thought leadership, speaking, psychology, and entrepreneurship</span>
                        </a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <a href="/" rel="noopener noreferrer" className="link-quiet">
                        Visit Full Website
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Links;
