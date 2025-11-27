import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./api/WeatherApi";


function App() {
    const [weather, setWeather] = useState(null);

    const handleSearch = async (city) => {
        try {
            const result = await getWeather(city);
            setWeather(result);
        } catch (err) {
            alert("City not found");
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingTop: "40px",
                fontFamily: "sans-serif",
                background: "#f0f4f8"
            }}
        >
            <h1 style={{ marginBottom: "20px" }}>Weather App</h1>

            <SearchBar onSearch={handleSearch} />

            <WeatherCard weather={weather} />
        </div>
    );

}

export default App;
