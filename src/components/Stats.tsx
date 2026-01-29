import { Clock, Heart, User, Headset } from 'lucide-react';

const stats = [
    {
        number: '10+',
        label: 'Years Experience',
        icon: <Clock size={28} />,
        bgColor: '#FFF0F5', // LavenderBlush
        iconColor: '#FF69B4' // HotPink
    },
    {
        number: '5,000+',
        label: 'Happy Patients',
        icon: <Heart size={28} />,
        bgColor: '#FFF5E6', // Light orange/cream
        iconColor: '#FF7F50' // Coral
    },
    {
        number: '15+',
        label: 'Certified Doctors',
        icon: <User size={28} />,
        bgColor: '#F3E5F5', // Lavender
        iconColor: '#9C27B0' // Purple
    },
    {
        number: '24/7',
        label: 'Emergency Support',
        icon: <Headset size={28} />,
        bgColor: '#FFF8E1', // Amber 50
        iconColor: '#FFA000' // Amber 700
    },
];

const Stats = () => {
    return (
        <section className="stats">
            <div className="container stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <div
                            className="stat-icon"
                            style={{
                                backgroundColor: stat.bgColor,
                                color: stat.iconColor
                            }}
                        >
                            {stat.icon}
                        </div>
                        <div>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                .stats {
                    padding: 3rem 0;
                    background: white;
                }
                .stats-container {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 2rem;
                }
                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .stat-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                .stat-item:hover .stat-icon {
                    transform: scale(1.1);
                }
                .stat-number {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #333;
                    line-height: 1.2;
                }
                .stat-label {
                    color: #666;
                    font-size: 0.9rem;
                    font-weight: 500;
                }
                @media (max-width: 768px) {
                    .stats-container {
                        flex-direction: column;
                        align-items: center;
                    }
                    .stat-item {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Stats;
