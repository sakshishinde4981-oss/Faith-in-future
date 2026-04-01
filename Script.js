async function getStock() {
    const symbol = document.getElementById("symbol").value;
    const resultDiv = document.getElementById("result");

    const apiKey = "demo"; // Replace with your API key from Alpha Vantage
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.Name) {
            resultDiv.innerHTML = "<p>Stock not found ❌</p>";
            return;
        }

        resultDiv.innerHTML = `
            <div class="card">
                <h2>${data.Name}</h2>
                <p><b>Sector:</b> ${data.Sector}</p>
                <p><b>Market Cap:</b> ${data.MarketCapitalization}</p>
                <p><b>P/E Ratio:</b> ${data.PERatio}</p>
                <p><b>EPS:</b> ${data.EPS}</p>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = "<p>Error fetching data ⚠️</p>";
    }
}