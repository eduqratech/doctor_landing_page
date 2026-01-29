
const doctors = [
    {
        name: 'DR. SOHAIB SIDDIQUI MD',
        role: '20 years experience',
        image: '/spec2.png'
    },
    {
        name: 'DOREEN BLOUIN, RN',
        role: '20 years experience',
        image: '/spec1.png'
    },
    {
        name: 'ETHNEE GARDNER, RN',
        role: '20 years experience',
        image: '/spec3.png'
    },
];

const Specialists = () => {
    return (
        <section className="specialists" id="doctors">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Meet Our Specialists</h2>
                    <div className="section-divider"></div>
                </div>

                <div className="doctors-grid">
                    {doctors.map((doc, index) => (
                        <div key={index} className="doctor-card">
                            <div className="doctor-image">
                                <img src={doc.image} alt={doc.name} />
                            </div>
                            <div className="doctor-card-info">
                                <h3 className="doctor-name">{doc.name}</h3>
                                <p className="doctor-role">{doc.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .specialists {
                    padding: 5rem 0;
                    background: white;
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
                    background: #2dd4bf; /* Teal */
                    margin: 0 auto;
                    border-radius: 2px;
                }
                .doctors-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .doctor-card {
                    position: relative;
                    border-radius: 1.5rem;
                    overflow: hidden;
                    height: 450px;
                    background: #e2e8f0; /* Gray/Slate 200 equivalent background */
                }
                .doctor-image {
                    width: 100%;
                    height: 100%;
                }
                .doctor-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    /* Ensure image covers the whole card background */
                    object-position: top center;
                    animation: float 4s ease-in-out infinite;
                }
                .doctor-card-info {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    right: 20px;
                    background: #2dd4bf; /* Teal background for info box */
                    padding: 1rem;
                    border-radius: 0.75rem;
                    text-align: center;
                    color: white;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .doctor-name {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin-bottom: 0.25rem;
                    text-transform: uppercase;
                }
                .doctor-role {
                    font-size: 0.9rem;
                    opacity: 0.9;
                }
                @media (max-width: 768px) {
                    .doctors-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Specialists;
