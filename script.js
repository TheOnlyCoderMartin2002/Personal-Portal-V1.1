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
    PIN_ACCESS_INP.value = "";
}

function enterBtn() {
    if (PIN_ACCESS_INP.value == DEV_PASSKEY) {
        alert("Access has been granted!");
        
        WELCOME_PANEL.style.display = "block";
        
        PIN_ACCESS_INP.style.display = "none";
        PIN_ACCESS_PANEL.style.display = "none";
        NUM_KEY_PANEL.style.display = "none";
        INFO_PAR.style.display = "none";
        PIN_CONTROL_PANEL.style.display = "none";
    } else {
        alert("Access has been denied!");
    }
}

function closeWelcomePanel() {
    document.getElementById("h2-1").style.display = "none";
    document.getElementById("info-par-2").style.display = "none";
    document.getElementById("close-welcome-panel").style.display = "none";
    MAIN_OPTION_MENU.style.display = "flex";
}

function openCalcJot() {
    document.getElementById("calc-jot-app").style.display = "flex";
    document.getElementById("root-container").style.width = "600px";
    WELCOME_PANEL.style.width = "580px";
    WELCOME_PANEL.style.height = "580px";
    MAIN_OPTION_MENU.style.display = "none";

}
