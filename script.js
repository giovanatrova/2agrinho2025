let campoPoints = 0;
let cidadePoints = 0;

function addPoint(area) {
    if (area === 'campo') {
        campoPoints++;
        document.getElementById('campoPoints').innerText = campoPoints;
    } else if (area === 'cidade') {
        cidadePoints++;
        document.getElementById('cidadePoints').innerText = cidadePoints;
    }

    checkWin();
}

function checkWin() {
    if (campoPoints >= 10 && cidadePoints >= 10) {
        document.getElementById('winnerMessage').innerText = 'Parabéns! Você venceu!';
    }
}
