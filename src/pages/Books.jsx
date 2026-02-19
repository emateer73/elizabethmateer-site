import React from 'react';
import Button from '../components/Button';
import { Users, Mic, BookOpen, Coffee } from 'lucide-react';
import SearchingHomeCover from '../assets/searching-for-home.webp';
import './Books.css';

const Books = () => {
    return (
        <div className="books-page">
            <div className="container">
                <h1 className="page-title text-center">Books</h1>

                <div className="books-grid">
                    <div className="book-card">
                        <div className="book-cover-wrapper">
                            <img src={SearchingHomeCover} alt="Cover of Searching for Home" className="book-cover" />
                        </div>
                        <div className="book-details">
                            <h2 className="book-title">Searching for Home</h2>
                            <p className="book-year">2024</p>
                            <p className="book-desc">
                                A collection of poetry exploring themes of love, loss, and the eternal human quest for belonging in a fragmented world.
                            </p>
                            <div className="book-actions">
                                <Button href="https://thepoetrybox.com/bookstore/searching" variant="primary">Buy Now</Button>
                                <Button to="/books/searching-for-home" variant="outline">Learn More</Button>
                            </div>
                        </div>
                    </div>

                    <div className="book-card">
                        <div className="book-cover-placeholder">
                            <span className="sr-only">Cover of A New Type of Breakfast</span>
                            <div className="cover-text">A New Type of Breakfast</div>
                        </div>
                        <div className="book-details">
                            <h2 className="book-title">A New Type of Breakfast</h2>
                            <p className="book-year">2026</p>
                            <p className="book-desc">
                                Tracing the evolution of identity and the process of becoming through the lens of daily rituals and neuropsychological insight.
                            </p>
                            <div className="book-actions">
                                <span className="pre-order-text">Available for pre-order in March 2026</span>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="events-section">
                    <h2 className="section-title">Events & Readings</h2>
                    <div className="events-placeholder">
                        <p>Upcoming dates to be announced soon.</p>
                        <Button href="#" variant="text">Join the mailing list for updates</Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Books;
