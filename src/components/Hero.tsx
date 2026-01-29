

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="badge">👋 Hello!</span>
                    <h1 className="hero-title">
                        Caring For Your Health, <span className="text-primary">Every Step Of The Way</span>
                    </h1>
                    <p className="hero-text">
                        Comprehensive and compassionate care for you and your family.
                        State-of-the-art facilities and expert medical professionals at your service.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Get Started Now</button>
                        <button className="btn btn-outline">Watch Video</button>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Assuming picture 2.png is the hero doctor image based on file size and name logic */}
                    <div className="image-wrapper">
                        <img src="/picture 2.png" alt="Doctor with clipboard" />
                        <div className="floating-card location-card">
                            <span className="icon">📍</span>
                            <div>
                                <strong>Our Location</strong>
                                <small>Hyderabad, India</small>
                            </div>
                        </div>
                        <div className="floating-card user-card">
                            <div className="avatar-group">
                                <span className="avatar">A</span>
                                <span className="avatar">B</span>
                            </div>
                            <div>
                                <strong>10k+</strong>
                                <small>Happy Patients</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .hero {
                    padding: 4rem 0;
                    background: linear-gradient(to right, #f8fafc, #ffffff);
                    overflow: hidden;
                }
                .hero-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                .badge {
                    background: var(--accent-color);
                    color: var(--primary-color);
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                }
                .hero-title {
                    font-size: 3.5rem;
                    line-height: 1.2;
                    color: var(--secondary-color);
                    margin-bottom: 1.5rem;
                }
                .hero-text {
                    font-size: 1.125rem;
                    color: var(--text-light);
                    margin-bottom: 2.5rem;
                    max-width: 500px;
                }
                .hero-buttons {
                    display: flex;
                    gap: 1rem;
                }
                .btn-outline {
                    border: 1px solid #e2e8f0;
                    color: var(--secondary-color);
                    padding: 0.75rem 1.5rem;
                    border-radius: 50px;
                    background: white;
                }
                .hero-image {
                    position: relative;
                }
                .image-wrapper {
                    position: relative;
                }
                .image-wrapper img {
                    border-radius: 2rem;
                    /* box-shadow: var(--shadow); */
                    animation: float 4s ease-in-out infinite;
                }
                .floating-card {
                    position: absolute;
                    background: white;
                    padding: 1rem;
                    border-radius: 1rem;
                    box-shadow: var(--shadow);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    animation: float 3s ease-in-out infinite;
                }
                .location-card {
                    bottom: 20px;
                    right: -20px;
                }
                .user-card {
                    top: 40px;
                    left: -30px;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @media (max-width: 1024px) {
                    .hero-container {
                        gap: 2rem;
                    }
                    .hero-title {
                        font-size: 2.5rem;
                    }
                }
                @media (max-width: 768px) {
                    .hero {
                        padding: 3rem 0;
                    }
                    .hero-container {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 3rem;
                    }
                    .hero-text {
                        margin: 0 auto 2rem;
                    }
                    .hero-buttons {
                        justify-content: center;
                    }
                    .hero-title {
                        font-size: 2rem;
                    }
                    .floating-card {
                        display: none; /* Hide floating cards on mobile to avoid clutter */
                    }
                    .location-card, .user-card {
                        position: static;
                        display: none;
                    }
                    .image-wrapper img {
                        max-width: 80%;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
