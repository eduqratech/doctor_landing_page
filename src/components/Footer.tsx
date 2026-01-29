
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <div className="logo" style={{ color: 'white', marginBottom: '1rem' }}>
                        <span className="logo-icon">💚</span>
                        <span>MediCare</span>
                    </div>
                    <p style={{ opacity: 0.7 }}>Providing the best medical care since 1990.</p>
                </div>
                <div className="footer-col">
                    <h4>Explore</h4>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Services</a>
                    <a href="#">Doctors</a>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>+91 9618344086</p>
                    <p>sureshpeddinti221@gmail.com</p>
                    <p>Gallery Milinium Plaza, Hyderabad</p>
                    <a href="https://www.linkedin.com/in/suresh-peddinti-5b6941232" target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem', display: 'inline-block', color: '#2dd4bf' }}>Connect on LinkedIn</a>
                </div>
                <div className="footer-col">
                    <h4>Find Our Clinic</h4>
                    <div className="mini-map" style={{ background: '#334155', padding: '1rem', borderRadius: '8px', opacity: 0.8 }}>
                        <small>Gallery Milinium Plaza</small>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 MediCare. All rights reserved.</p>
            </div>
            <style>{`
                .footer {
                    background: var(--secondary-color);
                    color: white;
                    padding: 4rem 0 0;
                }
                .footer-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                    padding-bottom: 3rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }
                .footer-col h4 {
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                }
                .footer-col a {
                    display: block;
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 0.75rem;
                }
                .footer-col p {
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 0.75rem;
                }
                .footer-col a:hover {
                    color: white;
                }
                .footer-bottom {
                    text-align: center;
                    padding: 2rem 0;
                    color: rgba(255,255,255,0.5);
                    font-size: 0.875rem;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
