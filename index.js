
window.onload = () => {
    const element = document.getElementById("main");
    if (element) {
        element.remove();
    }
};
const newHeader = document.createElement("h1");
    newHeader.id = "victory"; // Assign an ID (optional)
    newHeader.textContent = "ZACHARIA THUKU is the champion"; // Set its text content
    

    // Append the new <h1> to the document body
    document.body.appendChild(newHeader);

    // Make newHeader accessible in the global scope
    window.newHeader = newHeader;


