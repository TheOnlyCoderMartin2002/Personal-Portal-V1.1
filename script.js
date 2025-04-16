let DEV_PASSKEY = 7845;
let RAN_PIN = 1234;
let PIN_ACCESS_PANEL = document.getElementById("pin-access-panel");
let PIN_ACCESS_INP = document.getElementById("pin-access-inp");
let INFO_PAR = document.getElementById("info-par");
let NUM_KEY_PANEL = document.getElementById("num-key-panel");
let WELCOME_PANEL = document.getElementById("welcome-panel");
let MAIN_OPTION_MENU = document.getElementById("main-option-menu");
let PIN_CONTROL_PANEL = document.getElementById("pin-control-panel");
let PIN_ENT_BTN = document.getElementById("pin-ent-btn");
let PIN_CLR_BTN = document.getElementById("pin-clr-btn");

let CLOSE_WELCOME_PANEL = document.getElementById("close-welcome-panel");

function clearInp() {
    PIN_ACCESS_INP.value= "";
}

function enterBtn() {
    if (PIN_ACCESS_INP.value == DEV_PASSKEY) {
        alert("Passkey has been accepted!");
        
        WELCOME_PANEL.style.display = "block";
        
        PIN_ACCESS_INP.style.display = "none";
        PIN_ACCESS_PANEL.style.display = "none";
        NUM_KEY_PANEL.style.display = "none";
        INFO_PAR.style.display = "none";
        PIN_CONTROL_PANEL.style.display = "none";
    } else {
        alert("Passkey has been refused!");
        clearInp();
    }
    if (PIN_ACCESS_INP.value == RAN_PIN) {
        alert("Bruh.. 1234, reallyyyyy? looool");
        
    }
}

function closeWelcomePanel() {
    document.getElementById("h2-1").style.display = "none";
    document.getElementById("info-par-2").style.display = "none";
    document.getElementById("close-welcome-panel").style.display = "none";
    MAIN_OPTION_MENU.style.display = "flex";
}

function calcJot() {
    document.getElementById("root-container").style.width = "600px";
    document.getElementById("root-container").style.height = "600px";
    MAIN_OPTION_MENU.style.display = "none";

    let projectDisplay = document.createElement("iframe");
    projectDisplay.style.width = "100%";
    projectDisplay.style.height = "100%";
    projectDisplay.setAttribute("id", "project-display);
    projectDisplay.setAttribute("src". calcjot.html);                           
    WELCOME_PANEL.appendChild(projectDisplay);
    
}
