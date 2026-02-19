import React from 'react';
import Button from '../components/Button';
import SearchingHomeCover from '../assets/searching-for-home.webp';
import './SearchingForHome.css';

const SearchingForHome = () => {
    return (
        <div className="book-detail-page">
            <div className="container">
                <div className="book-detail-grid">
                    <div className="book-cover-column">
                        <div className="book-cover-wrapper-large">
                            <img src={SearchingHomeCover} alt="Cover of Searching for Home" className="book-cover-large" />
                        </div>
                    </div>
                    <div className="book-info-column">
                        <h1 className="book-detail-title">Searching for Home</h1>
                        <p className="book-detail-year">2024</p>

                        <div className="book-description">
                            <p>
                                Searching for Home is a poetry collection that explores love, loss, and the search for belonging. From tiny apartments in New York’s East Village to intimate moments in the desert, this collection captures the essence of human connection and celebrates the unyielding strength found in moments of vulnerability.
                            </p>
                        </div>

                        <div className="book-detail-actions-column">
                            <h3 className="purchase-heading">Purchase From:</h3>
                            <div className="purchase-buttons">
                                <Button href="https://thepoetrybox.com/bookstore/searching" variant="primary">The Poetry Box</Button>
                                <Button href="https://bookshop.org/p/books/searching-for-home-elizabeth-mateer/2d9d33239bf19c68?ean=9781956285727&next=t&" variant="outline">Bookshop.org</Button>
                                <Button href="https://www.barnesandnoble.com/w/searching-for-home-elizabeth-mateer/1146401865?ean=9781956285727" variant="outline">Barnes & Noble</Button>
                                <Button href="https://www.amazon.com/Searching-Home-Elizabeth-Mateer/dp/1956285725" variant="outline">Amazon</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchingForHome;
