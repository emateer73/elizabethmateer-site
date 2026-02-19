import React from 'react';
import Button from '../components/Button';
import { ArrowUpRight } from 'lucide-react';
import './Writing.css';

const Writing = () => {
    const [latestPost, setLatestPost] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://elizabethmateer.substack.com/feed')
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    setLatestPost(data.items[0]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching Substack feed:', error);
                setLoading(false);
            });
    }, []);

    const stripHtml = (html) => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    return (
        <div className="writing-page">
            <div className="container">
                <h1 className="page-title text-center">Writing</h1>

                <div className="writing-intro">
                    <p>Elizabeth Mateer writes about identity, attention, creativity, and the cognitive architecture of becoming.</p>
                    <p>Her essays explore how individuals construct meaning in periods of transition—how attention shapes agency, how resilience is built neurologically and narratively, and how creativity emerges from constraint. Bridging neuroscience and lived experience, her work translates complex psychological research into ideas relevant to everyday life.</p>
                    <p>Her work returns to a central question: how do we build coherent identities in a distracted, rapidly changing world?</p>
                </div>

                <div className="writing-section text-center">
                    <h2 className="section-heading">Monthly Essays (Substack)</h2>
                    <p className="section-subheading">Monthly long-form essays published at @elizabethmateer.</p>
                    <p className="section-description">
                        These essays explore identity, attention in the digital age, creativity, and the psychology of self-authorship. Written directly for readers, these essays offer sustained inquiry beyond the constraints of platform-driven publishing.
                    </p>

                    {latestPost && (
                        <div className="substack-preview-card">
                            <span className="substack-badge">Latest Post</span>
                            <h3 className="substack-title">{latestPost.title}</h3>
                            <p className="substack-excerpt">
                                {stripHtml(latestPost.description).substring(0, 160)}...
                            </p>
                            <div className="substack-meta">
                                <span className="substack-date">{new Date(latestPost.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <Button href={latestPost.link} target="_blank" variant="text">Read Story <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </div>
                    )}

                    <div className="button-group">
                        <Button href="https://substack.com" target="_blank" variant="outline">Read on Substack <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        <Button href="https://substack.com" target="_blank" variant="primary">Subscribe</Button>
                    </div>
                </div>

                <hr className="divider" />

                <div className="writing-section">
                    <div className="writing-header">
                        <h2 className="section-heading">Psychology Today</h2>
                        <p className="section-subheading">Selected essays from her Psychology Today column on identity, creativity, and cognitive science.</p>
                    </div>

                    <div className="writing-grid">
                        <article className="writing-card">
                            <h3>The Neuropsychology of Creativity</h3>
                            <p>How brain networks cooperate to produce novel ideas.</p>
                            <Button href="#" variant="text">Read Article <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </article>
                        <article className="writing-card">
                            <h3>Navigating Life Transitions</h3>
                            <p>Understanding the cognitive load of change and how to adapt.</p>
                            <Button href="#" variant="text">Read Article <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </article>
                        <article className="writing-card">
                            <h3>Agency and Self-Authorship</h3>
                            <p>Taking control of your narrative in a distracted world.</p>
                            <Button href="#" variant="text">Read Article <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </article>
                    </div>

                    <div className="text-center mt-lg">
                        <Button href="https://www.psychologytoday.com/" target="_blank" variant="outline">Read Latest Posts <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                    </div>
                </div>

                <hr className="divider" />

                <div className="writing-section literary-section">
                    <h2 className="section-heading">Literary & Creative Work</h2>
                    <p style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                        In addition to her essays and research, Elizabeth is the author of two poetry collections, <em>Searching for Home</em> (2024) and <em>A New Type of Breakfast</em> (2026). Her poetry and creative work have appeared in literary journals, magazines, and anthologies.
                    </p>
                    <Button href="https://www.searchingforhomepoet.com/" target="_blank" variant="outline">View Literary Archive <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                </div>

                <div className="writing-contact-cta">
                    <h2 className="section-heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>For Editors & Media</h2>
                    <p>For essays, interviews, or commentary requests, please use the Contact page.</p>
                    <Button to="/contact" variant="secondary">Contact Dr. Mateer</Button>
                </div>
            </div>
        </div>
    );
};

export default Writing;
