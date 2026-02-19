import React from 'react';
import './Links.css';
import { ArrowUpRight } from 'lucide-react';

const Links = () => {
    return (
        <div className="links-page">
            <div className="links-container">
                <header className="links-header">
                    <h1 className="links-name">Elizabeth Mateer, Ph.D.</h1>
                    <h2 className="links-title">Neuropsychology Fellow & Writer</h2>

                </header>

                <div className="links-section connect-section">
                    <h3 className="links-section-label">Connect</h3>
                    <div className="social-links-group">
                        <a href="https://www.tiktok.com/@beeblejuice" target="_blank" rel="noopener noreferrer" className="link-social">
                            TikTok
                        </a>
                        <a href="https://www.instagram.com/elizabeth_mateer" target="_blank" rel="noopener noreferrer" className="link-social">
                            Instagram
                        </a>
                    </div>
                </div>

                <div className="links-section writing-section">
                    <h3 className="links-section-label">Essays</h3>
                    <a href="https://elizabethmateer.substack.com/?utm_campaign=pub&utm_medium=web" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        Subscribe to Monthly Essays
                    </a>
                </div>

                <div className="links-section website-section">
                    <h3 className="links-section-label">Website</h3>
                    <a href="/" rel="noopener noreferrer" className="btn-text-link">
                        Visit Full Website <ArrowUpRight size={14} className="inline-arrow" />
                    </a>
                    <a href="https://searchingforhomepoet.com" target="_blank" rel="noopener noreferrer" className="btn-text-link">
                        Searching for Home (Poetry) <ArrowUpRight size={14} className="inline-arrow" />
                    </a>
                </div>

                <div className="links-section professional-section">
                    <h3 className="links-section-label">Professional</h3>
                    <a href="https://www.linkedin.com/in/elizabeth-mateer-phd-39b8a5192/" target="_blank" rel="noopener noreferrer" className="link-professional">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Links;
