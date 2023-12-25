const Statistics = ({ title, stats }) => {
    const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    };
    return (
    <section className="statistics">
        <h2 className="title">{title}</h2>
            <ul className="stat-list">
                {stats.map(stat => (
                <li key={stat.id} style={{ backgroundColor: generateRandomColor() }} className="item">
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}%</span>
                </li>
                ))}                
            </ul>
    </section>
    )
}

export default Statistics