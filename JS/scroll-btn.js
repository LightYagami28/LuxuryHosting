function scrollToAbout() {
    var aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({
        behavior: 'smooth' // Per rendere lo scrolling fluido
    });
}