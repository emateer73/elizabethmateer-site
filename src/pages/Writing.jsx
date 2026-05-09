import React from 'react';
import Button from '../components/Button';
import { ArrowUpRight } from 'lucide-react';
import './Writing.css';

const Writing = () => {
    const [substackPosts, setSubstackPosts] = React.useState([]);
    const [ptPosts, setPtPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Fetch Substack Feed
        const fetchSubstack = fetch('https://api.rss2json.com/v1/api.json?rss_url=https://elizabethmateer.substack.com/feed')
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    setSubstackPosts(data.items.slice(0, 3));
                }
            })
            .catch(error => console.error('Error fetching Substack feed:', error));

        // Fetch Psychology Today Feed
        const fetchPT = fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.psychologytoday.com/us/blog/the-architecture-of-identity/feed')
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    setPtPosts(data.items.slice(0, 3));
                }
            })
            .catch(error => console.error('Error fetching PT feed:', error));

        Promise.all([fetchSubstack, fetchPT]).finally(() => {
            setLoading(false);
        });
    }, []);

    const stripHtml = (html) => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString(undefined, { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
        <div className="writing-page">
            <div className="container">
                <h1 className="page-title text-center">Writing</h1>

                <div className="writing-intro">
                    <p>Writing on identity, attention, and becoming.</p>
                </div>

                <div className="featured-publications">
                    {/* Substack Column */}
                    <div className="pub-column substack-column">
                        <div className="pub-header">
                            <h2 className="section-heading">Where Attention Goes</h2>
                            <p className="section-subheading">Monthly Essays</p>
                        </div>

                        {substackPosts.length > 0 ? (
                            <>
                                <div className="editorial-primary-post">
                                    <span className="editorial-date">{formatDate(substackPosts[0].pubDate)}</span>
                                    <h3 className="editorial-title">{substackPosts[0].title}</h3>
                                    <p className="editorial-excerpt">
                                        {stripHtml(substackPosts[0].description).substring(0, 160)}...
                                    </p>
                                    <Button href={substackPosts[0].link} target="_blank" variant="text" className="editorial-read-cta">Read Essay <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                                </div>

                                {substackPosts.length > 1 && (
                                    <div className="editorial-secondary-posts">
                                        {substackPosts.slice(1).map((post, index) => (
                                            <div key={index} className="editorial-small-post">
                                                <h4 className="editorial-small-title">{post.title}</h4>
                                                <Button href={post.link} target="_blank" variant="text" className="editorial-read-cta small">Read Essay <ArrowUpRight size={14} style={{ marginLeft: '4px' }} /></Button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : !loading && <p>Latest essays loading...</p>}

                        <div className="pub-cta">
                            <Button href="https://elizabethmateer.substack.com/" target="_blank" variant="text" style={{ fontSize: '1.05rem' }}>Enter Where Attention Goes <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </div>
                    </div>

                    {/* PT Column */}
                    <div className="pub-column pt-column">
                        <div className="pub-header">
                            <h2 className="section-heading">Psychology Today</h2>
                            <p className="section-subheading" style={{ textTransform: 'none', letterSpacing: '0', fontSize: '1rem' }}>The Architecture of Identity</p>
                        </div>

                        {ptPosts.length > 0 ? (
                            <>
                                <div className="editorial-primary-post">
                                    <span className="editorial-date">{formatDate(ptPosts[0].pubDate)}</span>
                                    <h3 className="editorial-title">{ptPosts[0].title}</h3>
                                    <p className="editorial-excerpt">
                                        {stripHtml(ptPosts[0].description).substring(0, 160)}...
                                    </p>
                                    <Button href={ptPosts[0].link} target="_blank" variant="text" className="editorial-read-cta">Read Article <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                                </div>

                                {ptPosts.length > 1 && (
                                    <div className="editorial-secondary-posts">
                                        {ptPosts.slice(1, 3).map((post, index) => (
                                            <div key={index} className="editorial-small-post">
                                                <span className="editorial-date" style={{marginBottom: '8px', fontSize: '0.8rem'}}>{formatDate(post.pubDate)}</span>
                                                <h4 className="editorial-small-title">{post.title}</h4>
                                                <Button href={post.link} target="_blank" variant="text" className="editorial-read-cta small">Read Article <ArrowUpRight size={14} style={{ marginLeft: '4px' }} /></Button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : !loading && <p>Latest articles loading...</p>}

                        <div className="pub-cta">
                            <Button href="https://www.psychologytoday.com/us/contributors/elizabeth-mateer-phd" target="_blank" variant="text" style={{ fontSize: '1.05rem' }}>View All Columns <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </div>
                    </div>
                </div>

                <hr className="divider" style={{ opacity: 0.05, margin: '80px 0 100px' }} />

                <div className="writing-section literary-section">
                    <h2 className="section-heading">Literary & Creative Work</h2>
                    <p style={{ marginBottom: '1rem', maxWidth: '800px', margin: '0 auto 1rem' }}>
                        Elizabeth is the author of two poetry collections, <em>Searching for Home</em> (2024) and <em>A New Type of Breakfast</em> (2026).
                    </p>
                    <p style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                        Her work has appeared in literary journals, magazines, and anthologies, and serves as the foundation for Searching for Home Collective — a literary salon and evolving creative platform devoted to craft, risk, and artistic exchange.
                    </p>
                    <Button href="https://www.searchingforhomecollective.com/" target="_blank" variant="outline">Explore the Collective <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
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
