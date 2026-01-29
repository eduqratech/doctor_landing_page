
const reasons = [
    {
        title: 'Experienced Medical Team',
        desc: 'Certified doctors with strong clinical expertise and patient care experience.',
        icon: '/why_choose_1.png'
    },
    {
        title: 'Patient-First Care',
        desc: 'Personalized treatment plans focused on comfort, safety, and recovery.',
        icon: '/why_choose_2.png'
    },
    {
        title: 'Modern & Hygienic Facility',
        desc: 'Clean, well-equipped clinic following medical safety standards.',
        icon: '/why_choose_3.png'
    },
    {
        title: 'Clear Communication',
        desc: 'Easy appointments, transparent consultations, and ongoing support.',
        icon: '/why_choose_4.png'
    },
];

const WhyChooseUs = () => {
    return (
        <section className="choose-us" id="why-us">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Us</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="choose-grid">
                    {reasons.map((item, index) => (
                        <div key={index} className="choose-card">
                            <div className="card-image-wrapper">
                                <img src={item.icon} alt={item.title} className="choose-img" />
                            </div>
                            <div className="card-content">
                                <h3 className="choose-title">{item.title}</h3>
                                <p className="choose-text">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .choose-us {
                    padding: 5rem 0;
                    background: #f0fdfa; /* Mint-50 like background */
                }
                .section-header {
                    text-align: center;
                    margin-bottom: 3.5rem;
                }
                .section-title {
                    font-size: 2.5rem;
                    color: #1a1a1a;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .section-divider {
                    width: 60px;
                    height: 4px;
                    background: #2dd4bf;
                    margin: 0 auto;
                    border-radius: 2px;
                }
                .choose-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .choose-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 1.5rem;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    transition: transform 0.3s ease;
                }
                .choose-card:hover {
                    transform: translateY(-5px);
                }
                .card-image-wrapper {
                    flex-shrink: 0;
                    width: 100px;
                    height: 80px;
                    overflow: hidden;
                    border-radius: 12px;
                }
                .choose-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .card-content {
                    flex: 1;
                }
                .choose-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0.5rem;
                }
                .choose-text {
                    color: #64748b;
                    font-size: 0.95rem;
                    line-height: 1.6;
                }
                @media (max-width: 768px) {
                    .choose-grid {
                        grid-template-columns: 1fr;
                    }
                    .choose-card {
                        flex-direction: column;
                        text-align: center;
                    }
                    .card-image-wrapper {
                        width: 100%;
                        height: 160px;
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default WhyChooseUs;
