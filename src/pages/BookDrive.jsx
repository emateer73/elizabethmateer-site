import React from 'react';
import Button from '../components/Button';
import { ExternalLink } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './BookDrive.css';

const WISHLIST_URL = 'https://www.amazon.com/hz/wishlist/ls/2F31NCGUPC037';

const BookDrive = () => {
    useDocumentTitle('Holiday Book & Pajama Drive | Elizabeth Mateer, Ph.D.');

    return (
        <div className="bookdrive-page">
            <div className="container bookdrive-container">

                {/* Hero */}
                <header className="bd-hero">
                    <span className="bd-eyebrow">Holiday 2026 · Boston</span>
                    <h1 className="bd-title">A Story of Their Own</h1>
                    <p className="bd-lead">
                        A holiday drive collecting new books and pajamas for children in the Boston area,
                        in partnership with Beyond Bedtime.
                    </p>
                </header>

                <hr className="bd-divider" />

                {/* Why */}
                <section className="bd-section bd-why">
                    <p>
                        Every child deserves a book to call their own and a warm night&rsquo;s sleep. This season,
                        neighbors and friends around Boston are putting together new books and pajamas for local
                        kids, and sending them where they&rsquo;re needed through Beyond Bedtime.
                    </p>
                    <p>
                        One of my first volunteer experiences was reading to children through the Pajama Program
                        in New York. This is a small way to bring that full circle.
                    </p>
                </section>

                {/* How to help */}
                <section className="bd-section">
                    <div className="bd-section-header">
                        <h2 className="bd-heading">Two ways to give</h2>
                    </div>

                    <div className="bd-help-grid">
                        <div className="bd-help-card">
                            <span className="bd-card-number">01</span>
                            <h3 className="bd-card-title">Give from the wishlist</h3>
                            <p className="bd-card-text">
                                Choose a book or a pajama set and it ships straight to the drive. The easiest option
                                if you&rsquo;re outside Boston or short on time.
                            </p>
                            <Button href={WISHLIST_URL} variant="primary" className="bd-btn">
                                Shop the wishlist <ExternalLink size={14} style={{ marginLeft: '6px', opacity: 0.7 }} />
                            </Button>
                        </div>

                        <div className="bd-help-card">
                            <span className="bd-card-number">02</span>
                            <h3 className="bd-card-title">Give in person</h3>
                            <p className="bd-card-text">
                                Prefer to hand off books or pajamas directly? Get in touch and we&rsquo;ll
                                coordinate a drop-off somewhere in Boston.
                            </p>
                            <Button to="/contact" variant="outline" className="bd-btn">
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </section>

                <hr className="bd-divider" />

                {/* What's welcome + dates */}
                <section className="bd-section bd-details">
                    <div className="bd-detail-block">
                        <h2 className="bd-heading">What&rsquo;s welcome</h2>
                        <ul className="bd-list">
                            <li>New children&rsquo;s books, ages 0 to 12</li>
                            <li>New pajama sets, complete with tops and bottoms, sizes 0 to 12</li>
                            <li>New and unused only, please</li>
                        </ul>
                    </div>
                    <div className="bd-detail-block">
                        <h2 className="bd-heading">When</h2>
                        <p className="bd-when">Now through December&nbsp;12.</p>
                    </div>
                </section>

                <hr className="bd-divider" />

                {/* About Beyond Bedtime */}
                <section className="bd-section bd-partner">
                    <span className="bd-eyebrow bd-eyebrow-left">Our partner</span>
                    <h2 className="bd-heading">Beyond Bedtime</h2>
                    <p>
                        Beyond Bedtime is a national nonprofit that gives children facing adversity new books and
                        pajamas, so they can feel cared for and ready to rest. Everything collected here goes to
                        families in the Boston area through their local program partners.
                    </p>
                </section>

                {/* CTA */}
                <section className="bd-cta-section">
                    <div className="bd-cta-card">
                        <span className="bd-cta-eyebrow">Join in</span>
                        <h2 className="bd-cta-title">Give a book, give a good night</h2>
                        <p className="bd-cta-body">
                            A single book and a warm pair of pajamas can change how a child feels about bedtime.
                            Thank you for being part of it.
                        </p>
                        <div className="bd-cta-buttons">
                            <Button href={WISHLIST_URL} variant="primary" className="bd-btn">
                                Shop the wishlist <ExternalLink size={14} style={{ marginLeft: '6px', opacity: 0.7 }} />
                            </Button>
                            <Button to="/contact" variant="outline" className="bd-btn">
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default BookDrive;
