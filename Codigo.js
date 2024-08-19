const historicalData = [
    { day_of_week: 'Monday', weather: 'sunny', rentals: 50 },
    { day_of_week: 'Monday', weather: 'rainy', rentals: 20 },
    { day_of_week: 'Tuesday', weather: 'sunny', rentals: 55 },
    { day_of_week: 'Tuesday', weather: 'cloudy', rentals: 40 },
    // Add more data points as needed
];

function predictRentals() {
    const dayOfWeek = document.getElementById('day_of_week').value;
    const weather = document.getElementById('weather').value;

    // Filter historical data based on user input
    const filteredData = historicalData.filter(
        entry => entry.day_of_week === dayOfWeek && entry.weather === weather
    );

    // Calculate average rentals for selected day and weather
    const totalRentals = filteredData.reduce((sum, entry) => sum + entry.rentals, 0);
    const averageRentals = filteredData.length > 0 ? totalRentals / filteredData.length : 0;

    // Update prediction
    document.getElementById('prediction').textContent = averageRentals.toFixed(0);
}
