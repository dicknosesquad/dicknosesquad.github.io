async function runHeaderTest() {
    const url = document.getElementById("header-url").value;
    const headerResults = document.getElementById("header-results");
    headerResults.innerHTML = "";

    try {
        const response = await fetch(url);
        const headers = response.headers;

        const securityHeaders = {
            "Content-Security-Policy": headers.get("content-security-policy"),
            "Strict-Transport-Security": headers.get("strict-transport-security"),
            "X-Frame-Options": headers.get("x-frame-options"),
            "X-Content-Type-Options": headers.get("x-content-type-options")
        };

        let results = "";
        for (let [header, value] of Object.entries(securityHeaders)) {
            results += `<p>${header}: ${value || "Not set"}</p>`;
        }
        headerResults.innerHTML = results;
        logResults("HTTP Header Analysis", results);

    } catch (error) {
        headerResults.innerHTML = `<p>Error fetching headers: ${error}</p>`;
        logResults("HTTP Header Analysis", `Error: ${error}`);
    }
}

function runCSPTest() {
    // Example function for CSP Testing
    const url = document.getElementById("csp-url").value;
    const cspResults = document.getElementById("csp-results");

    cspResults.innerHTML = `<p>Testing CSP for ${url}...</p>`;
    logResults("CSP Test", `Tested CSP for ${url}`);
}
