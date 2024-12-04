// Text Minifier
// developed by Tawhidur Rahman Dear, https://www.tawhidurrahmandear.com
// Live Preview available at https://www.devilhunter.net/p/minify-text.html

function minifyText() {
    // Get the input text
    const inputText = document.getElementById("input").value;

    // Get selected option
    const selectedOption = document.querySelector('input[name="textMinifyOption"]:checked').value;

    let outputText = inputText;

    // Process text based on the selected option
    switch (selectedOption) {
        case "space":
            outputText = outputText.replace(/ /g, ""); // Remove all spaces
            break;
        case "extraSpaces":
            outputText = outputText.replace(/\s+/g, " ").trim(); // Remove extra spaces only
            break;
        case "tab":
            outputText = outputText.replace(/\t/g, ""); // Remove tab characters
            break;
        case "line":
            outputText = outputText.replace(/\r?\n/g, ""); // Remove line breaks
            break;
    }

    // Set the output text
    document.getElementById("output").value = outputText;
}

function reset() {
    // Clear input and output text areas
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
    document.getElementById("feedback").textContent = ""; // Clear feedback message
}

function copy() {
    // Copy output text to clipboard
    const outputTextarea = document.getElementById("output");
    outputTextarea.select();
    document.execCommand("copy");

    // Show feedback message
    document.getElementById("feedback").textContent = "Text copied to clipboard!";
}

 