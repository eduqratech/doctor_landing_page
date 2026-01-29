import { MapPin, Clock } from 'lucide-react';

const MapSection = () => {
    return (
        <section className="map-section">
            <div className="container map-container">
                <div className="map-info">
                    <div className="section-header-left">
                        <h2 className="section-title-left">Find Us Locally</h2>
                        <div className="title-divider"></div>
                    </div>

                    <p className="map-description">
                        We are conveniently located in the heart of Attapur to serve our local community.
                    </p>

                    <div className="info-list">
                        <div className="info-item">
                            <div className="icon-wrapper">
                                <MapPin size={24} className="info-icon" />
                            </div>
                            <div className="item-content">
                                <h3>Our Address</h3>
                                <p>Attapur, Inner Ring Rd, Pillar No 145, Hyderabad, Telangana 500048</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-wrapper">
                                <Clock size={24} className="info-icon" />
                            </div>
                            <div className="item-content">
                                <h3>Clinic Hours</h3>
                                <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                                <p className="emergency-text">Sunday: Emergency Only</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map-image-container">
                    <img
                        src="/🌎 Map Maker_12.png"
                        alt="Location Map Attapur"
                        className="map-img"
                    />
                </div>
            </div>

            <style>{`
                .map-section {
                    padding: 6rem 0;
                    background: white;
                }
                .map-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                .section-header-left {
                    margin-bottom: 1.5rem;
                }
                .section-title-left {
                    font-size: 2.5rem;
                    color: #1a1a1a;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .title-divider {
                    width: 60px;
                    height: 4px;
                    background: #2dd4bf; /* Teal */
                    border-radius: 2px;
                }
                .map-description {
                    color: #64748b;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin-bottom: 3rem;
                    max-width: 450px;
                }
                .info-list {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                .info-item {
                    display: flex;
                    gap: 1.5rem;
                    align-items: flex-start;
                }
                .icon-wrapper {
                    width: 60px;
                    height: 60px;
                    background: #f0fdfa; /* Mint 50 */
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .info-icon {
                    color: #10b981; /* Emerald 500 */
                }
                .item-content h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0.5rem;
                }
                .item-content p {
                    color: #64748b;
                    line-height: 1.5;
                    font-size: 1rem;
                }
                .emergency-text {
                    color: #ef4444 !important; /* Red 500 */
                    font-weight: 500;
                    margin-top: 0.25rem;
                }
                .map-image-container {
                    border-radius: 2rem;
                    overflow: hidden;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    height: 400px; /* Fixed height for consistent look */
                }
                .map-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                @media (max-width: 900px) {
                    .map-container {
                        grid-template-columns: 1fr;
                    }
                    .map-image-container {
                        height: 300px;
                    }
                }
            `}</style>
        </section>
    );
};

export default MapSection;
