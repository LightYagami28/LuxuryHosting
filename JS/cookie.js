document.addEventListener("DOMContentLoaded", function() {
    var cookieBanner = document.getElementById('cookieBanner');
    var acceptButton = document.getElementById('acceptButton');
    var declineButton = document.getElementById('declineButton');

    acceptButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
    });

    declineButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
    });
});
