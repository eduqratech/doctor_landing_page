import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <span className="logo-icon">💚</span>
                    <span className="logo-text">Medi<span className="text-primary">Care</span></span>
                </div>
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <a href="#home" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
                    <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#doctors" className="nav-link" onClick={() => setIsMenuOpen(false)}>Doctors</a>
                    <a href="#blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</a>
                    <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
                </nav>
                <div className="header-actions">
                    <button className="btn btn-primary d-none-mobile">Make an Appointment</button>
                    <button className="mobile-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
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
                    font-size: 1rem;
                    color: var(--text-color);
                }
                .nav-link:hover, .nav-link.active {
                    color: var(--primary-color);
                }
                }
                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .mobile-toggle {
                    display: none;
                    color: var(--secondary-color);
                }
                @media (max-width: 768px) {
                    .nav {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        flex-direction: column;
                        padding: 2rem;
                        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                        transform: translateY(-150%);
                        transition: transform 0.3s ease-in-out;
                        z-index: 999;
                    }
                    .nav.nav-open {
                        transform: translateY(0);
                    }
                    .mobile-toggle {
                        display: block;
                    }
                    .d-none-mobile {
                        display: none;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
