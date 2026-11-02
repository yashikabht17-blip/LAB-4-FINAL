let mood = "";

function chooseMood(choice) {
    mood = choice;

    if (mood === "tired") {
        document.getElementById("heading").innerHTML = "Time for a break";
        document.getElementById("result").innerHTML =
            "Take a 10-minute break. Stretch and drink some water before studying again.";
        document.getElementById("suggestion").style.backgroundColor = "#fff0cc";

    } else if (mood === "stressed") {
        document.getElementById("heading").innerHTML = "Take it slowly";
        document.getElementById("result").innerHTML =
            "Pause for a few minutes. Take some slow breaths and choose one small task to work on.";
        document.getElementById("suggestion").style.backgroundColor = "#dceeff";

    } else {
        document.getElementById("heading").innerHTML = "Ready to study";
        document.getElementById("result").innerHTML =
            "Work on one task for 25 minutes. Put away distractions and take a short break afterwards.";
        document.getElementById("suggestion").style.backgroundColor = "#dff0d8";
    }
}

function resetPlanner() {
    mood = "";

    document.getElementById("heading").innerHTML = "Your study plan";
    document.getElementById("result").innerHTML =
        "Choose how you feel to get a suggestion.";
    document.getElementById("suggestion").style.backgroundColor = "#eeeeee";
}