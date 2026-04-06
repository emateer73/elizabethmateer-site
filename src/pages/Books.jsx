import React from 'react';
import Button from '../components/Button';
import { Users, Mic, BookOpen, Coffee } from 'lucide-react';
import SearchingHomeCover from '../assets/searching-for-home.webp';
import BreakfastCover from '../assets/a new type of breakfast book cover.jpg';
import './Books.css';

const Books = () => {
    return (
        <div className="books-page">
            <div className="container">
                <h1 className="page-title text-center">Books</h1>

                <div className="books-grid">
                    <div className="book-card">
                        <div className="book-cover-wrapper">
                            <img src={BreakfastCover} alt="Cover of A New Type of Breakfast" className="book-cover" />
                        </div>
                        <div className="book-details">
                            <h2 className="book-title">A New Type of Breakfast</h2>
                            <p className="book-year">2026</p>
                            <p className="book-desc">
                                A New Type of Breakfast traces the long aftermath of early hurt and the ways neglect, loss, and silence shape us long after the original damage has passed. The title poem marks a breaking point: the dissolution of hope, followed by the quiet possibility of a new beginning.
                            </p>
                            <div className="book-actions">
                                <Button href="https://www.finishinglinepress.com/product/a-new-type-of-breakfast-by-elizabeth-mateer/" variant="primary">Pre-order Now</Button>
                            </div>
                        </div>
                    </div>

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
                </div>

                <section className="events-section">
                    <h2 className="section-title">Events & Readings</h2>
                    <div className="events-placeholder">
                        <p>Upcoming dates to be announced soon.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Books;
