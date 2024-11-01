async function runHeaderTest() {
    const url = "https://support.apple.com/en-us/101555";
    const headerResults = document.getElementById("header-results");
    
    try {
        const response = await fetch(url);
        const headers = response.headers;
        
        const securityHeaders = {
            "Content-Security-Policy": headers.get("content-security-policy"),
            "Strict-Transport-Security": headers.get("strict-transport-security"),
            "X-Frame-Options": headers.get("x-frame-options"),
            "X-Content-Type-Options": headers.get("x-content-type-options")
        };

        for (let [header, value] of Object.entries(securityHeaders)) {
            headerResults.innerHTML += `<p>${header}: ${value || "Not set"}</p>`;
        }
    } catch (error) {
        headerResults.innerHTML = `<p>Error fetching headers: ${error}</p>`;
    }
}
