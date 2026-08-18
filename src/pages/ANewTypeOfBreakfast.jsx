import React from 'react';
import Button from '../components/Button';
import BreakfastCover from '../assets/a new type of breakfast book cover.jpg';
import './ANewTypeOfBreakfast.css';

const ANewTypeOfBreakfast = () => {
    return (
        <div className="book-detail-page">
            <div className="container">
                <div className="book-detail-grid">
                    <div className="book-cover-column">
                        <div className="book-cover-wrapper-large">
                            <img src={BreakfastCover} alt="Cover of A New Type of Breakfast" className="book-cover-large" />
                        </div>
                    </div>
                    <div className="book-info-column">
                        <h1 className="book-detail-title">A New Type of Breakfast</h1>
                        <p className="book-detail-year">2026</p>

                        <div className="book-description">
                            <p>
                                A New Type of Breakfast traces the long aftermath of early hurt and the ways neglect, loss, and silence shape us long after the original damage has passed. The title poem marks a breaking point: the dissolution of hope, followed by the quiet possibility of a new beginning.
                            </p>
                        </div>

                        <div className="book-detail-actions-column">
                            <h3 className="purchase-heading">Purchase From:</h3>
                            <div className="purchase-buttons">
                                <Button href="https://finishinglinepress.com/product/a-new-type-of-breakfast-by-elizabeth-mateer/" variant="primary">Finishing Line Press</Button>
                                <Button href="https://bookshop.org/p/books/a-new-type-of-breakfast-elizabeth-mateer/0ac6a134505c397d?ean=9798899905728&bkshp-astro=t" variant="outline">Bookshop.org</Button>
                                <Button href="https://www.barnesandnoble.com/w/a-new-type-of-breakfast-elizabeth-mateer/1150875552?ean=9798899905728" variant="outline">Barnes & Noble</Button>
                                <Button href="https://www.amazon.com/New-Type-Breakfast-Elizabeth-Mateer/dp/B0HBGJMXPJ" variant="outline">Amazon</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ANewTypeOfBreakfast;
