

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <span className="logo-icon">💚</span>
                    <span className="logo-text">Medi<span className="text-primary">Care</span></span>
                </div>
                <nav className="nav">
                    <a href="#home" className="nav-link active">Home</a>
                    <a href="#about" className="nav-link">About Us</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#doctors" className="nav-link">Doctors</a>
                    <a href="#blog" className="nav-link">Blog</a>
                    <a href="#contact" className="nav-link">Contact Us</a>
                </nav>
                <button className="btn btn-primary">Make an Appointment</button>
            </div>
            <style>{`
                .header {
                    padding: 1.5rem 0;
                    position: sticky;
                    top: 0;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    z-index: 1000;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                }
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--secondary-color);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .nav {
                    display: flex;
                    gap: 2rem;
                }
                .nav-link {
                    font-weight: 500;
                    font-size: 0.95rem;
                    color: var(--text-color);
                }
                .nav-link:hover, .nav-link.active {
                    color: var(--primary-color);
                }
                @media (max-width: 768px) {
                    .nav { display: none; } /* Mobile menu simplified for now */
                }
            `}</style>
        </header>
    );
};

export default Header;
