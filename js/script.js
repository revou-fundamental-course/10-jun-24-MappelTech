function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius').value;
    if (celsiusInput === "") {
        alert("Please enter a temperature value.");
        return;
    }
    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('explanation').value = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function reverseConversion() {
    const fahrenheitInput = document.getElementById('celsius').value;
    if (fahrenheitInput === "") {
        alert("Please enter a temperature value.");
        return;
    }
    const fahrenheit = parseFloat(fahrenheitInput);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('fahrenheit').value = celsius.toFixed(2);
    document.getElementById('explanation').value = `${fahrenheit}°F − 32 × (5/9) = ${celsius.toFixed(2)}°C`;
}

function reverseConversionPage() {
    alert("Feature to convert Fahrenheit to Celsius will be implemented.");
}