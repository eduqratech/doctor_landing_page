import { Stethoscope, Activity, Brain, Bone, HeartPulse, HeartHandshake, ArrowRight } from 'lucide-react';

const services = [
    {
        title: 'General Consultation',
        desc: 'Comprehensive health check-ups and diagnostic assessments.',
        icon: <Stethoscope size={32} />
    },
    {
        title: 'Physiotherapy',
        desc: 'Specialized physical therapy for recovery and mobility.',
        icon: <Activity size={32} />
    },
    {
        title: 'Pain Management',
        desc: 'Expert strategies for chronic and acute pain relief.',
        icon: <Brain size={32} />
    },
    {
        title: 'Orthopedic Care',
        desc: 'Specialized care for bone, joint, and muscle conditions.',
        icon: <Bone size={32} />
    },
    {
        title: 'Diagnostics',
        desc: 'State-of-the-art laboratory and imaging facilities.',
        icon: <HeartPulse size={32} />
    },
    {
        title: 'Rehabilitation',
        desc: 'Guided recovery programs for post-surgical patients.',
        icon: <HeartHandshake size={32} />
    },
];

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Medical Services</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle">
                        Comprehensive healthcare solutions tailored to your individual needs.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <a href="#" className="service-link">
                                Read more <ArrowRight size={16} className="arrow-icon" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .services {
                    padding: 5rem 0;
                    background: #f8fafc;
                }
                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .section-title {
                    font-size: 2.5rem;
                    color: #1a1a1a;
                    margin-bottom: 1rem;
                    font-weight: 700;
                }
                .section-divider {
                    width: 60px;
                    height: 4px;
                    background: #2dd4bf; /* Teal-400 */
                    margin: 0 auto 1.5rem;
                    border-radius: 2px;
                }
                .section-subtitle {
                    color: #64748b;
                    line-height: 1.6;
                }
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    padding: 0 1rem;
                }
                .service-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 1.5rem;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                }
                .service-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }
                .service-icon-wrapper {
                    width: 64px;
                    height: 64px;
                    background: #ecfdf5; /* Emerald-50 */
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                    color: #10b981; /* Emerald-500 */
                    transition: all 0.3s ease;
                }
                .service-card:hover .service-icon-wrapper {
                    background: #10b981;
                    color: white;
                }
                .service-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 1rem;
                }
                .service-desc {
                    color: #64748b;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                    font-size: 1rem;
                }
                .service-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #10b981;
                    font-weight: 600;
                    font-size: 0.95rem;
                    text-decoration: none;
                    transition: gap 0.3s ease;
                }
                .service-link:hover {
                    gap: 0.75rem;
                }
                .arrow-icon {
                    transition: transform 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default Services;
