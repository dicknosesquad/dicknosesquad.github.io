const validUsername = "MHinkle"; // Change this to your desired username
const validPassword = "Bridgette1987!"; // Change this to your desired password

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error");
    const loginForm = document.getElementById("loginForm");
    const appContainer = document.getElementById("appContainer");

    if (username === validUsername && password === validPassword) {
        loginForm.classList.add("hidden");
        appContainer.classList.remove("hidden");
    } else {
        errorMessage.textContent = "Invalid credentials. Please try again.";
    }
}

function runNmap() {
    const target = document.getElementById("nmapInput").value;
    document.getElementById("nmapOutput").textContent = `Running Nmap on ${target}...`;
    // Simulate Nmap command execution
}

function runBurp() {
    const target = document.getElementById("burpInput").value;
    document.getElementById("burpOutput").textContent = `Running Burp Suite on ${target}...`;
    // Simulate Burp Suite command execution
}

function runMetasploit() {
    const target = document.getElementById("metasploitInput").value;
    document.getElementById("metasploitOutput").textContent = `Running Metasploit on ${target}...`;
    // Simulate Metasploit command execution
}

function runSqlmap() {
    const target = document.getElementById("sqlmapInput").value;
    document.getElementById("sqlmapOutput").textContent = `Running SQLmap on ${target}...`;
    // Simulate SQLmap command execution
}
