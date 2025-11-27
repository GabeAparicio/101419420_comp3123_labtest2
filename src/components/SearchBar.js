import { useState } from "react";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city) return;
        onSearch(city);
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    width: "200px",
                    marginRight: "10px"
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "10px 15px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "white"
                }}
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;
