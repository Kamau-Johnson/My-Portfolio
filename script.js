document.addEventListener('DOMContentLoaded', function() {
    const professions = [
        "Computer Scientist",
        "Data Science Practitioner",
        "Cyber Security Analyst",
        "Graphics Designer",
        "Web Developer"
    ];
    
    const typewriterElement = document.getElementById('typewriter');
    let currentProfession = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeWriter() {
        const fullText = professions[currentProfession];
        
        if (isDeleting) {
            typewriterElement.textContent = fullText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = fullText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === fullText.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentProfession = (currentProfession + 1) % professions.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    // Start the typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
});