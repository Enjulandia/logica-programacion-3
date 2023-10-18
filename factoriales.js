let userInput;
let factorial = 1;

while (true) {
    userInput = prompt("Introduce un número para calcular su factorial:");

    if (userInput === null) {
        break;
    }

    userInput = parseFloat(userInput);

    if (isNaN(userInput)) {
        alert("Por favor, introduce un número válido.");
    } else {
        for (let i = 2; i <= userInput; i++) {
            factorial *= i;
        }
        break;
    }
}

if (userInput !== null) {
    const resultMessage = `El factorial de ${userInput} es: ${factorial}`;
    document.body.innerHTML = `<h1>${resultMessage}</h1>`;
} else {
    document.body.innerHTML = "<h1>Operación cancelada.</h1>";
}