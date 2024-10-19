window.onscroll = function () { myFunction() };

//validate form
function setSenderUI(nameOutput, npmOutput, birthOutput, kotatinggalOutput, genderOutput, messageOutput) {
    const output =
        "Nama: " + nameOutput +
        "\nNPM: " + npmOutput +
        "\nTanggal Lahir: " + birthOutput +
        "\nKota Tinggal: " + kotatinggalOutput +
        "\nJenis Kelamin: " + genderOutput +
        "\nPesan: " + messageOutput;

    document.getElementById("form-output").value = output;  // Set the message output to the textarea
}

function validateForm() {
    const nameOutput = document.forms["message-form"]["name-input"].value;
    const npmOutput = document.forms["message-form"]["npm-input"].value;
    const birthOutput = document.forms["message-form"]["birth-input"].value;
    const kotatinggalOutput = document.forms["message-form"]["kotatinggal-input"].value;
    const genderOutput = document.querySelector('input[name="gender"]:checked')?.value;
    const messageOutput = document.forms["message-form"]["message-input"].value;

    // Check if all fields are filled
    if (nameOutput === "" || npmOutput === "" || birthOutput === "" || kotatinggalOutput === "" || !genderOutput || messageOutput === "") {
        alert("Please fill out all the fields");
        return false;
    }

    // Call function to update the output
    setSenderUI(nameOutput, npmOutput, birthOutput, kotatinggalOutput, genderOutput, messageOutput);

    return false; // Prevent form submission for demo purposes
}