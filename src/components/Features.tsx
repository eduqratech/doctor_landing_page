

const Features = () => {
    return (
        <section className="features" id="about">
            <div className="container features-container">
                <div className="features-image">
                    <img src="/picture 3.png" alt="Caregiver with patient" />
                    <div className="years-badge">
                        <span className="years-num">10+</span>
                        <span className="years-text">Years</span>
                    </div>
                </div>
                <div className="features-content">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                        Reliable, Ethical, And <span className="text-primary">Compassionate Care</span>
                    </h2>
                    <p className="features-text">
                        We provide top-notch healthcare services with a focus on patient comfort and safety.
                        Our dedicated team ensures that you receive the best possible treatment.
                    </p>
                    <div className="features-list">
                        <div className="feature-item">
                            <span className="feature-icon">✅</span>
                            <div>
                                <strong>Top Specialist Doctors</strong>
                                <p>Access to highly qualified specialists.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <span className="feature-icon">✅</span>
                            <div>
                                <strong>State-of-the-Art Facilities</strong>
                                <p>Modern equipment for accurate diagnosis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="doctor-sig">
                        <div className="doctor-avatar">
                            <img src="/sharan.png" alt="Dr. Sharan" style={{ width: '100%', borderRadius: '50%' }} />
                        </div>
                        <div>
                            <strong>Dr. Sharan</strong>
                            <small style={{ display: 'block', color: 'var(--text-light)' }}>Chief Medical Officer</small>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .features {
                    padding: 6rem 0;
                    background: white;
                }
                .features-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                    align-items: center;
                }
                .features-image {
                    position: relative;
                }
                .features-image img {
                    border-radius: 1.5rem;
                    width: 100%;
                    animation: float 4s ease-in-out infinite;
                }
                .years-badge {
                    position: absolute;
                    bottom: 30px;
                    right: 30px;
                    background: var(--primary-color);
                    color: white;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border: 4px solid white;
                }
                .years-num {
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                .features-text {
                    color: var(--text-light);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }
                .features-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .feature-item {
                    display: flex;
                    gap: 0.75rem;
                }
                .feature-icon {
                    color: var(--primary-color);
                }
                .doctor-sig {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding-top: 1rem;
                    border-top: 1px solid #e2e8f0;
                }
                .doctor-avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: #eee;
                    overflow: hidden;
                }
                @media (max-width: 1024px) {
                    .features-container {
                        gap: 3rem;
                    }
                }
                @media (max-width: 968px) {
                    .features-container {
                        grid-template-columns: 1fr;
                    }
                    .features-list {
                        grid-template-columns: 1fr;
                    }
                    .features-image {
                        order: -1; 
                        margin-bottom: 2rem;
                    }
                    .section-title {
                        text-align: center !important; /* Override inline style */
                        font-size: 2rem;
                    }
                    .features-text {
                        text-align: center;
                    }
                    .doctor-sig {
                        justify-content: center;
                    }
                    .years-badge {
                         width: 80px;
                         height: 80px;
                         bottom: 15px;
                         right: 15px;
                    }
                    .years-num {
                        font-size: 1.2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Features;
