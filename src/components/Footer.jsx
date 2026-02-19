import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-links">
                    <a href="https://www.psychdraft.com" target="_blank" rel="noopener noreferrer">PsychDraft</a>
                    <Link to="/links">Connect</Link>
                </div>
                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} Elizabeth Mateer, Ph.D.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
