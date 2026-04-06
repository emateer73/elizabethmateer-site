import React from 'react';
import Button from '../components/Button';
import { ArrowUpRight } from 'lucide-react';
import './Writing.css';

const Writing = () => {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://elizabethmateer.substack.com/feed')
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    setPosts(data.items.slice(0, 3));
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
                    <p>Writing on identity, attention, and becoming.</p>
                </div>

                <div className="featured-publications">
                    <div className="pub-column substack-column">
                        <div className="pub-header">
                            <h2 className="section-heading">Where Attention Goes</h2>
                            <p className="section-subheading">Monthly Essays</p>
                        </div>

                        {posts.length > 0 && (
                            <div className="editorial-primary-post">
                                <span className="editorial-date">{new Date(posts[0].pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                <h3 className="editorial-title">{posts[0].title}</h3>
                                <p className="editorial-excerpt">
                                    {stripHtml(posts[0].description).substring(0, 160)}...
                                </p>
                                <Button href={posts[0].link} target="_blank" variant="text" className="editorial-read-cta">Read Essay <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                            </div>
                        )}

                        {posts.length > 1 && (
                            <div className="editorial-secondary-posts">
                                {posts.slice(1).map((post, index) => (
                                    <div key={index} className="editorial-small-post">
                                        <h4 className="editorial-small-title">{post.title}</h4>
                                        <Button href={post.link} target="_blank" variant="text" className="editorial-read-cta small">Read Essay <ArrowUpRight size={14} style={{ marginLeft: '4px' }} /></Button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="pub-cta">
                            <Button href="https://elizabethmateer.substack.com/" target="_blank" variant="primary">Enter Where Attention Goes</Button>
                        </div>
                    </div>

                    <div className="pub-column pt-column">
                        <div className="pub-header">
                            <h2 className="section-heading">Psychology Today</h2>
                            <p className="section-subheading">The Architecture of Identity</p>
                        </div>

                        <div className="editorial-primary-post">
                            <h3 className="editorial-title">The Architecture of Identity: How the Brain Builds a Self</h3>
                            <p className="editorial-excerpt">
                                An exploration of how neurons and narratives weave together to construct our sense of self.
                            </p>
                            <Button href="https://www.psychologytoday.com/us/blog/the-architecture-of-identity/202602/the-architecture-of-identity-how-the-brain-builds-a-self" target="_blank" variant="text" className="editorial-read-cta">Read Article <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </div>

                        <div className="pub-cta">
                            <Button href="https://www.psychologytoday.com/us/contributors/elizabeth-mateer-phd" target="_blank" variant="outline">View All Columns <ArrowUpRight size={16} style={{ marginLeft: '4px' }} /></Button>
                        </div>
                    </div>
                </div>

                <hr className="divider" style={{ opacity: 0.3, margin: '60px 0' }} />

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
