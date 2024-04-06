function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Funzione per chiudere la finestra modale
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Chiudere la finestra modale cliccando al di fuori di essa
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}