import React from 'react';
import './Links.css';
import { ArrowRight } from 'lucide-react';

const Links = () => {
    return (
        <div className="links-page">
            <div className="links-container">
                <header className="links-header">
                    <h1 className="links-name">Elizabeth Mateer, Ph.D.</h1>
                    <h2 className="links-title">Neuropsychology Fellow & Writer</h2>
                </header>
                
                <a href="https://www.finishinglinepress.com/product/a-new-type-of-breakfast-by-elizabeth-mateer/" target="_blank" rel="noopener noreferrer" className="btn-prominent">
                    Pre-order A New Type of Breakfast
                </a>

                <div className="links-section">
                    <h3 className="links-section-label">Explore My Work</h3>
                    
                    <div className="work-items-group">
                        <div className="work-item">
                            <h4 className="work-item-title">Where Attention Goes</h4>
                            <p className="work-item-subtext">Essays on identity, attention, and becoming</p>
                            <a href="https://elizabethmateer.substack.com/" target="_blank" rel="noopener noreferrer" className="work-item-cta">
                                Read Essays <ArrowRight size={14} className="inline-arrow" />
                            </a>
                        </div>

                        <div className="work-item">
                            <h4 className="work-item-title">PsychDraft</h4>
                            <p className="work-item-subtext">AI-powered clinical writing for psychologists</p>
                            <a href="https://psychdraft.com/" target="_blank" rel="noopener noreferrer" className="work-item-cta">
                                Explore PsychDraft <ArrowRight size={14} className="inline-arrow" />
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
                    <h3 className="links-section-label">Follow the Work</h3>
                    <div className="social-links-group">
                        <a href="https://www.tiktok.com/@beeblejuice" target="_blank" rel="noopener noreferrer" className="link-social">
                            TikTok
                        </a>
                        <a href="https://www.instagram.com/elizabeth_mateer/" target="_blank" rel="noopener noreferrer" className="link-social">
                            Instagram
                        </a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <div className="links-section">
                        <h3 className="links-section-label">Website</h3>
                        <a href="/" rel="noopener noreferrer" className="link-quiet">
                            Visit Full Website
                        </a>
                    </div>

                    <div className="links-section">
                        <h3 className="links-section-label">Professional</h3>
                        <a href="https://www.linkedin.com/in/elizabeth-mateer-phd-39b8a5192/" target="_blank" rel="noopener noreferrer" className="link-quiet">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Links;
