import { Phone, Clock, ChevronDown } from 'lucide-react';

const BookAppointment = () => {
    return (
        <section className="booking-section" id="contact">
            <div className="container">
                <div className="booking-card">
                    {/* Left Side - Info */}
                    <div className="booking-info">
                        <h2 className="booking-title">Ready To Start Your Recovery?</h2>
                        <p className="booking-text">
                            Fill out the form to request a callback. Our clinical coordinator
                            will reach out to schedule a convenient time for you.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon-wrapper">
                                    <Phone size={20} className="info-icon" />
                                </div>
                                <div className="info-details">
                                    <span className="info-label">Emergency Contact</span>
                                    <strong className="info-value">+91 9618344086</strong>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon-wrapper">
                                    <Clock size={20} className="info-icon" />
                                </div>
                                <div className="info-details">
                                    <span className="info-label">Working Hours</span>
                                    <strong className="info-value">Mon - Sat: 9am - 7pm</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="booking-form-container">
                        <h3 className="form-title">Request Callback</h3>
                        <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" />
                            </div>

                            <div className="form-group">
                                <label>Department</label>
                                <div className="select-wrapper">
                                    <select>
                                        <option>General Consultation</option>
                                        <option>Physiotherapy</option>
                                        <option>Orthopedics</option>
                                    </select>
                                    <ChevronDown size={18} className="select-arrow" />
                                </div>
                            </div>

                            <button className="book-btn">Book Appointment</button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .booking-section {
                    padding: 5rem 0;
                    background: #f0fdfa; /* Light mint background */
                }
                .booking-card {
                    display: flex;
                    background: white;
                    border-radius: 2.5rem;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    max-width: 1000px;
                    margin: 0 auto;
                }
                
                /* Left Side */
                .booking-info {
                    flex: 1;
                    background: #2dd4bf; /* Teal-400 */
                    padding: 4rem 3rem;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .booking-title {
                    font-size: 2.5rem;
                    line-height: 1.2;
                    margin-bottom: 1.5rem;
                    font-weight: 700;
                }
                .booking-text {
                    font-size: 1rem;
                    line-height: 1.6;
                    opacity: 0.9;
                    margin-bottom: 3rem;
                }
                .info-items {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .info-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .info-icon-wrapper {
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .info-icon {
                    color: white;
                }
                .info-details {
                    display: flex;
                    flex-direction: column;
                }
                .info-label {
                    font-size: 0.9rem;
                    opacity: 0.9;
                    margin-bottom: 0.1rem;
                }
                .info-value {
                    font-size: 1.1rem;
                    font-weight: 700;
                }

                /* Right Side */
                .booking-form-container {
                    flex: 1;
                    padding: 4rem 3rem;
                    background: white;
                }
                .form-title {
                    font-size: 2rem;
                    color: #1a1a1a;
                    margin-bottom: 2.5rem;
                    font-weight: 700;
                }
                .form-group {
                    margin-bottom: 1.5rem;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: #1a1a1a;
                    font-weight: 600;
                    font-size: 1rem;
                }
                .form-group input, .form-group select {
                    width: 100%;
                    padding: 1rem 1.25rem;
                    background: #f8fafc; /* Slate-50 */
                    border: 1px solid transparent;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    color: #334155;
                    outline: none;
                    transition: all 0.2s;
                }
                .form-group input::placeholder {
                    color: #cbd5e1;
                }
                .form-group input:focus, .form-group select:focus {
                    background: white;
                    border-color: #2dd4bf;
                    box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.1);
                }
                .select-wrapper {
                    position: relative;
                }
                .form-group select {
                    appearance: none;
                    cursor: pointer;
                }
                .select-arrow {
                    position: absolute;
                    right: 1.25rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94a3b8;
                    pointer-events: none;
                }
                .book-btn {
                    width: 100%;
                    padding: 1rem;
                    background: #2dd4bf;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    margin-top: 1rem;
                    transition: background 0.3s;
                }
                .book-btn:hover {
                    background: #14b8a6; /* Teal-500 */
                }

                @media (max-width: 900px) {
                    .booking-card {
                        flex-direction: column;
                        border-radius: 1.5rem;
                    }
                    .booking-info, .booking-form-container {
                        padding: 3rem 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default BookAppointment;
