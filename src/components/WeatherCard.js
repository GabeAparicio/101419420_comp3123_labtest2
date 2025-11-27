function WeatherCard({ weather }) {
    if (!weather) {
        return <p style={{ marginTop: "20px" }}>Search for a city to see the weather.</p>;
    }

    return (
        <div
            style={{
                padding: "20px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                width: "300px",
                textAlign: "center",
                color: "white",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                marginTop: "20px"
            }}
        >
            <h2 style={{ marginBottom: "10px", fontSize: "24px" }}>
                {weather.name}
            </h2>

            <img
                src={weather.icon}
                alt="Weather icon"
                style={{ width: "100px", height: "100px" }}
            />

            <h3 style={{ fontSize: "36px", margin: "10px 0" }}>
                {weather.temp}°C
            </h3>

            <p style={{ fontSize: "18px", textTransform: "capitalize", marginBottom: "15px" }}>
                {weather.description}
            </p>

            {/* STATS BOX */}
            <div
                style={{
                    background: "rgba(255, 255, 255, 0.25)",
                    borderRadius: "10px",
                    padding: "12px",
                    marginTop: "10px",
                    fontSize: "16px",
                    lineHeight: "1.6"
                }}
            >
                <p>
                    <strong>Min:</strong> {weather.temp_min}°C&nbsp; | &nbsp;
                    <strong>Max:</strong> {weather.temp_max}°C
                </p>

                <p>
                    <strong>Humidity:</strong> {weather.humidity}%
                </p>

                <p>
                    <strong>Wind:</strong> {weather.wind} m/s
                </p>
            </div>
        </div>
    );
}

export default WeatherCard;
