const chatBox = document.getElementById("chatBox");

const menu = {
    pizza: 150,
    burger: 100,
    pasta: 120,
    fries: 80,
    coke: 50
};

let total = 0;

botMessage("Welcome! 🍕🍔");
botMessage("Menu: Pizza ₹150, Burger ₹100, Pasta ₹120, Fries ₹80, Coke ₹50");
botMessage("Type item name to order or 'done' to finish.");

function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim().toLowerCase();

    if (text === "") return;

    userMessage(text);

    if (text === "done") {
        botMessage("Your total bill is ₹" + total);
        botMessage("Thank you for ordering! 😊");
        total = 0;
    } 
    else if (menu[text]) {
        total += menu[text];
        botMessage(text + " added. Price ₹" + menu[text]);
    } 
    else {
        botMessage("Sorry, item not available 😕");
    }

    input.value = "";
}

function userMessage(msg) {
    const div = document.createElement("div");
    div.className = "message user";
    div.innerText = msg;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botMessage(msg) {
    const div = document.createElement("div");
    div.className = "message bot";
    div.innerText = msg;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}
